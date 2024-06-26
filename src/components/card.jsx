import PropTypes from "prop-types";

const Card = ({infos,  nextEpisode, startFollow, calculProgress}) => {

  return (
    <article>
      <img src={infos.img} alt={`Affiche de la dernière saison de ${infos.title}`} />
      <div className="sidePart">
        <div className="title">
          <h3>{infos.title}</h3>
          {infos.nbSeasons !== 1 ? (<p>{infos.nbSeasons} saisons</p>):(<p>{infos.nbSeasons} saison</p>)}
        </div>
        <div className="infos">
          {infos.isFollowed ? (
            <>
              <progress max="100" value={calculProgress(infos)}></progress> 
              <p>Dernier épisode visionné : <br />{`saison ${infos.lastSeen[0]}, épisode ${infos.lastSeen[1]}`}</p>
              <button onClick={() => {nextEpisode(infos.title)}}>épisode suivant</button>
            </>
          ):(
            <>
            <p>{infos.description}</p>
            <button onClick={() => {startFollow(infos.title)}}>commencer à suivre</button> 
            </>
          )}
        </div>
      </div>
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.array,
  infos: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    description : PropTypes.string,
    nbSeasons : PropTypes.number,
    nbEpisodes : PropTypes.array,
    lastSeen : PropTypes.array,
    isFollowed: PropTypes.bool,
  }).isRequired,
  nextEpisode: PropTypes.func,
  startFollow: PropTypes.func,
  calculProgress: PropTypes.func,
}

export default Card;

