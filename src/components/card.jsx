import PropTypes from "prop-types";
import '../styles/card.css'

const Card = ({infos, followedTitles, currentEpisodes}) => {
  const totalEpisodes = () => {
    let total = 0;
    for (let i = 0; i < infos.nbEpisodes.length; i++){
      total = total + infos.nbEpisodes[i];
    }
    return total
  }
  const currentEpisode = currentEpisodes.find((element) => element.title === infos.title);
  const progress = () => {
    if (currentEpisode === undefined) {
      return 0
    }
    let count = currentEpisode.current[1];
    for (let i = 0; i < currentEpisode.current[0]-1; i++) {
      count = count + infos.nbEpisodes[i];      
    }
    return count;
  }
console.log(followedTitles)
  return (
    <article>
      <img src={infos.img} alt={`Affiche de la dernière saison de ${infos.title}`} />
      <div className="infos">
        <h3>{infos.title}</h3>
        {infos.nbSeasons !== 1 ? (<p>{infos.nbSeasons} saisons</p>):(<p>{infos.nbSeasons} saison</p>)}
        {infos.isFollowed ? (
          <>
          <progress max={totalEpisodes()} value={progress()}></progress> 
            <p>Dernier épisode visionné : <br />{`saison ${currentEpisode[0]}, épisode ${currentEpisode[1]}`}</p>
            <button onClick={""}>épisode suivant</button>
          </>
        ):(
          <>
          <p>{infos.description}</p>
          <button onClick={""}>commencer à suivre</button>
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
  followedTitles : PropTypes.array,
  currentEpisodes: PropTypes.array,
}

export default Card;

