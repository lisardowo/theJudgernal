import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './PowerShellWindow.css';
import ComfortCharacters from './ComfortCharacters';
import Aboutme from './aboutme';

export type PowerShellWindowProps = {
  title?: string;
  lines?: string[];
  statusText?: string;
  className?: string;
  prompt?: string;
  onExecute?: (command: string) => string[] | Promise<string[]>;
};

const defaultLines: string[] = [
  'pxgn terminal',
  '',
  'ERROR - ACCES_DENIED_05x50 |OsName, OsVersion',
  'OsName                           OsVersion',
  'Judge                            07.03.07',
  'Type <<Help>> to see some commands !         07.03.07'
];

const PowerShellWindow: React.FC<PowerShellWindowProps> = ({
  title = 'Windows PowerShell',
  lines = defaultLines,
  statusText = 'C:\\System\\pxgn\\v1.0\\terminal.pxgn',
  className,
  prompt = 'PS C:>',
  onExecute
}) => {
  const [buffer, setBuffer] = useState<string[]>(lines);
  const [inputValue, setInputValue] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Modal state (separate window)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('Comfort Characters');
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const consoleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBuffer(lines);
  }, [lines]);

  useEffect(() => {
    const el = consoleRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [buffer]);

  const openWindow = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const builtinExecute = async (command: string): Promise<string[]> => {
    const trimmed = command.trim();
    if (!trimmed) return [];

    const c = trimmed.toLowerCase();

    if (c === 'help') {
      return [
        'Built-in commands:',
        '  help              Show this help',
        '  cls|clear         Clear the console',
        '  echo <text>       Print text',
        '  ls                List placeholder entries',
        '  openwin           Open a separate window'
      ];
    }

    if (c === 'cls' || c === 'clear') {
      setBuffer(defaultLines);
      return [];
    }

    if (c.startsWith('echo ')) {
      return [trimmed.slice(5)];
    }

    if (c === 'ls' || c === 'dir') {
      return [
        ' Directory of C:\\',
        ' 01/01/2026  12:00 PM    <DIR>       Projects',
        ' 01/01/2026  12:00 PM               README.md',
        '               1 File(s)              1,024 bytes',
        '               1 Dir(s)'
      ];
    }

    if (c === 'comchar') {
      openWindow('My comfort characters', <ComfortCharacters />);
      return ['maybe wit this u can see me as I do...'];
    }
     if (c === 'r') {
      openWindow('My comfort characters', <Aboutme/>);
      return ['maybe wit this u can see me as I do...'];
    }

    return [
      `${trimmed}: The term '${trimmed}' is not recognized as a valid command.`,
      'Check the spelling of the name.'
    ];
  };

  const handleSubmit = async () => {
    const cmd = inputValue;
    const promptLine = `${prompt} ${cmd}`;
    setBuffer(prev => [...prev, promptLine]);

    // track history
    if (cmd.trim()) {
      setHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    }

    let output: string[] = [];
    if (onExecute) {
      try {
        const res = await onExecute(cmd);
        if (Array.isArray(res)) output = res;
      } catch {
        output = ['Command handler error.'];
      }
    }
    if (output.length === 0) {
      output = await builtinExecute(cmd);
    }

    if (output.length) setBuffer(prev => [...prev, ...output]);
    setInputValue('');
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputValue(history[nextIndex] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = Math.min(history.length - 1, historyIndex + 1);
      setHistoryIndex(nextIndex);
      setInputValue(history[nextIndex] ?? '');
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={['ps-window', className].filter(Boolean).join(' ')}>
      <div className="ps-titlebar">
        <div className="ps-title">{title}</div>
        <div className="ps-caption-buttons">
          <button className="ps-btn ps-min">—</button>
          <button className="ps-btn ps-max">□</button>
          <button className="ps-btn ps-close" onClick={() => setBuffer(defaultLines)}>×</button>
        </div>
      </div>

      <div className="ps-frame">
        <div className="ps-console" ref={consoleRef}>
          {buffer.map((line, idx) => (
            <pre key={idx} className="ps-line">{line}</pre>
          ))}
          <div className="ps-input-row">
            <span className="ps-prompt">{prompt}</span>
            <input
              className="ps-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
        <div className="ps-status">{statusText}</div>
      </div>

      {isModalOpen && ReactDOM.createPortal(
        <div className="ps-modal-overlay" onClick={closeModal}>
          <div className="ps-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="ps-modal-titlebar">
              <div className="ps-modal-title">{modalTitle}</div>
              <button className="ps-modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="ps-modal-body">{modalContent}</div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default PowerShellWindow;
