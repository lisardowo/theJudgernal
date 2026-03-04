
import './ComforCharactersCard.css';

type CharacterComponents = {
  character: string;
  show : string;

}

const Card = ({character, show} : CharacterComponents) => {
    return (
      <>
        <div className='Card'>
          <div className='imagen'></div>
              <div className='Character'>{character}</div>
              <div className='show'>{show}</div>
        </div>
      </>
    )
  }
  ;
export default Card