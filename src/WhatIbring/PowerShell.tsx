import React, { useEffect, useRef, useState } from 'react';
import './PowerShell.css';
import ComfortCharacters from './ComfortCharacters';

export type PowerShellProps = {
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

const PowerShell: React.FC<PowerShellProps> = ({
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
  const [showComfortCharacters, setShowComfortCharacters] = useState<boolean>(false);

  const consoleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBuffer(lines);
  }, [lines]);

  useEffect(() => {
    const el = consoleRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [buffer]);

  const LINKS = [
    'https://thedressedmolerat.github.io/',
    'https://88x31.nl/',
    'https://forum.melonland.net/closed.html',
    'https://geekring.net/',
    'https://john.citrons.xyz/',
    'https://zeroisanaturalnumber.party/',
    'https://www.thegitcity.com/',
    'https://88x31.kate.pet/',
  ];

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
        '  ls                ill add something here(idk know what)',
        '  comchar           Show comfort characters panel below terminal',
        '  links! [page]     links to pages I found funny :3 '
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

    if (c.startsWith('comchar')) {
      setShowComfortCharacters(true);
      return ['maybe wit this u understand me a lil better'];
    }

    if (c.startsWith('links!')) {
      const parts = trimmed.split(/\s+/);
      const pageArg = parts[1];
      const pageSize = 5;
      let page = 1;

      if (pageArg) {
        const parsed = parseInt(pageArg, 10);
        if (!Number.isNaN(parsed) && parsed > 0) {
          page = parsed;
        }
      }

      const totalPages = Math.max(1, Math.ceil(LINKS.length / pageSize));
      const startIndex = (page - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, LINKS.length);

      if (startIndex >= LINKS.length) {
        return [
          `links! ${page}: No hay más enlaces.`,
          `Páginas disponibles: 1-${totalPages}`,
          'Usa: links! [número_de_página]'
        ];
      }

      const header = `Links page ${page}/${totalPages}:`;
      const linesOut = LINKS.slice(startIndex, endIndex).map((url, idx) => {
        const globalIndex = startIndex + idx + 1;
        return `  [${globalIndex}] ${url}`;
      });

      linesOut.unshift(header);
      linesOut.push('1/1');//page number for the links 5 per page
      return linesOut;
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

      {showComfortCharacters && (
        <div className="ps-comfort-container">
          <ComfortCharacters />
        </div>
      )}
    </div>
  );
};

export default PowerShell;
