import PropTypes from "prop-types";
import '../styles/card.css'

const Card = ({infos, key}) => {
  
  const buttonMessage = (allEpisodes) => {
    for (let i = 0; i < allEpisodes.length; i++){
      for (let j = 0; j < allEpisodes[i].length; j++){
        if (!allEpisodes[i][j]){
          return "Premier épisode visionné"
        }
        return "Episode visionné"
      }
    }
  }
    
  const nextEpisode = (allEpisodes) => {
    let episode = 1, season = 1
    for (let i = 0; i < allEpisodes.length; i++){
      for (let j = 0; j < allEpisodes[i].length; j++){
        if (!allEpisodes[i][j]){
          return `épisode ${episode} saison ${season}` 
        }
        episode = episode + 1;
      }
      episode = 1
      season = season + 1;
    }
  }
  console.log (infos)
  console.log (key)
  return (
    <article>
      <img src={infos.img} alt={`Affiche de la dernière saison ${infos.title}`} />
      <div className="infos">
        <h3>{infos.title}</h3>
        <p>{infos.episodesStatus.length} saison(s)</p>
        {!infos.episodesStatus[0][0] ? (<p>{infos.description}</p>):(<p>prochain épisode à voir : <br /> {nextEpisode(infos.episodesStatus)}</p>)}
        <button>{buttonMessage(infos.episodesStatus)}</button>
      </div>
    </article>
  )
}

Card.propTypes = {
  infos : PropTypes.object,
  key : PropTypes.string,
}

export default Card;
