
import {useState} from 'react';
import './Home.css';


const Home = () => {
    console.log("header up")
    const [dialogueCount, setDialogueCount] = useState(0);

const dialogueHandler = () =>{
    console.log("boton!")
    setDialogueCount(prev => prev + 1);
   
}

const specialName = <span id = 'specialName'>Lisardo</span>;

enum dialogues{

    welcomept1 = `hi, welcome to my blog, My name is `,

    welcomept2 = `and I will be guiding you while you're wandering around here, you will always find me in the right
    corner if u ever get lost n.n.
    This page as of today is best appreciated from a comptuer so have that in mind while visiting the site
    (But dw Im currently working in a fully responsive mobile page)
    `,
    SelectPage = `first of all, tell me what you would like to see first :`
}

const welcomeDialogue = (dialogueCount:number) =>{


    if(dialogueCount === 0){
       return( 
        <>
        <p className = "dialogue-text">{dialogues.welcomept1} {specialName} {dialogues.welcomept2}</p>
     

        <div className='next-indicator'>
                <button onClick={dialogueHandler} id = "next-dialogue">▼</button>
            </div>
        </>
        );
    }
    else{
        return(
            <>
                <p className="dialogue-text">{dialogues.SelectPage}</p>
               
        
                <ul className= "options-container">
                    <li className='option'>
                        <a href='/AboutMe'>What I bring to the table  </a>
                    </li>
                    <li className='option'>
                       <a href=''> Uhhhm I'm a nerd </a>
                    </li>
                    <li className='option'>
                       <a href=''> Blogs!!</a>
                    </li>
                    <li className='option'>
                       <a href=''>  88x31`s</a>
                    </li>
                </ul>
            </>
        );
    }
    

    
    
}

    return(
        <>
         <div id="header" className="DialogueBox">
                <div id="Name">
                    Lisardo
                </div>
                {welcomeDialogue(dialogueCount)}
            </div> 
        
            
            <div className="penguin">
                <div className="pixel-art"><img src='/pinguino.svg'></img></div>
            </div>
        </>

        
    );
}



export default Home

