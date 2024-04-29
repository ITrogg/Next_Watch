import PropTypes from "prop-types";
import '../styles/card.css'

const Card = ({infos}) => {
  


  return (
    <article>
      <img src={infos.img} alt={`Affiche de la dernière saison de ${infos.title}`} />
      <div className="infos">
        <h3>{infos.title}</h3>
        {infos.nbSeasons !== 1 ? (<p>{infos.nbSeasons} saisons</p>):(<p>{infos.nbSeasons} saison</p>)}
        {infos.isFollowed ? (
          <>
            {/* <progress max={100} value="70">70%</progress> */}
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
    lastSeen : PropTypes.array,
    isFollowed: PropTypes.bool,
  }).isRequired,
}

export default Card;

