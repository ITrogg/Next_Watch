import PropTypes from "prop-types";
import '../styles/card.css'

const Card = ({infos}) => {
  const totalEpisodes = () => {
    let total = 0;
    for (let i = 0; i < infos.nbEpisodes.length; i++){
      total = total + infos.nbEpisodes[i];
    }
    return total
  }
  const progress = () => {
    let count = infos.lastSeen[1];
    for (let i = 0; i < infos.lastSeen[0]-1; i++) {
      count = count + infos.nbEpisodes[i];      
    }
    return count;
  }


  return (
    <article>
      <img src={infos.img} alt={`Affiche de la dernière saison de ${infos.title}`} />
      <div className="infos">
        <h3>{infos.title}</h3>
        {infos.nbSeasons !== 1 ? (<p>{infos.nbSeasons} saisons</p>):(<p>{infos.nbSeasons} saison</p>)}
        {infos.isFollowed ? (
          <>
          <progress max={totalEpisodes()} value={progress()}>70%</progress> 
            <p>Dernier épisode visionné : <br />{`saison ${infos.lastSeen[0]}, épisode ${infos.lastSeen[1]}`}</p>
            <button>épisode suivant</button>
          </>
        ):(
          <>
          <p>{infos.description}</p>
          <button>commencer à suivre</button>
          </>
        )}
      </div>
    </article>
  )
}

Card.propTypes = {
  infos: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    description : PropTypes.string,
    nbSeasons : PropTypes.number,
    nbEpisodes : PropTypes.array,
    lastSeen : PropTypes.array,
    isFollowed: PropTypes.bool,
  }).isRequired,
}

export default Card;

