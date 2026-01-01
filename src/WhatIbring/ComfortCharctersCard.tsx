
import './ComforCharactersCard.css';

type CharacterComponents = {
  character: string;
  show : string;

}

const ComfortCharactersCard = ({character, show} : CharacterComponents) => {
    return (
    <>
    
<div className="card">
  <div className="card-border-top">
  </div>
  <div className="img">
  </div>
  <span> {character}</span>
  <p className="show"> {show}</p>
  
</div>
    </>
    );
}

export default ComfortCharactersCard;
