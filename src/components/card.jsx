import PropTypes from "prop-types";
import '../styles/card.css'

const data = [
  {
    title : "Hasbin Hôtel",
    img : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rXojaQcxVUubPLSrFV8PD4xdjrs.jpg",
    description : "Charlie Morningstar, la Princesse de l'Enfer, lutte pour convaincre les démons et les anges que n'importe quelle âme peut être rachetée. Venez chanter devant cette comédie musicale animée pour adultes sur la rédemption.",
    date : 2024,
    episodesStatus : [[true, true, true, true, false, false, false, false]],
    isFollowed : true,
  },
  {
    title : "The Last of us",
    img : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eIQqqWFBtzKFfcxuuemtRNtoIkN.jpg",
    description : "Vingt ans après la destruction de la civilisation moderne, Joel, un survivant endurci, est engagé pour faire sortir Ellie, une jeune fille de 14 ans, d'une zone de quarantaine oppressante. Ce qui n'est au départ qu'un petit travail se transforme rapidement en un voyage brutal et époustouflant, alors que ce duo improbable dépend de l'autre pour sa survie.",
    date : 2023,
    episodesStatus :[[false, false, false, false, false, false, false, false, false]],
  },
  {
    title : "The Last of us",
    img : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eIQqqWFBtzKFfcxuuemtRNtoIkN.jpg",
    description : "Vingt ans après la destruction de la civilisation moderne, Joel, un survivant endurci, est engagé pour faire sortir Ellie, une jeune fille de 14 ans, d'une zone de quarantaine oppressante. Ce qui n'est au départ qu'un petit travail se transforme rapidement en un voyage brutal et époustouflant, alors que ce duo improbable dépend de l'autre pour sa survie.",
    date : 2023,
    episodesStatus :[[false, false, false, false, false, false, false, false, false]],
  },
]

const Card = ({index}) => {
  const buttonMessage = () => {
    if (!data[index].isFollowed) {
      return "Premier épisode visionné"
    }
    return "Episode visionné"
  }

  const nextEpisode = (allEpisodes) => {
    let episode = 1, season = 1
    for (let i = 0; i < allEpisodes.length; i++){
      console.log (allEpisodes[i])
      for (let j = 0; j < allEpisodes[i].length; j++){
        if (!allEpisodes[i][j]){
          return `épisode ${episode} saison ${season}` 
        }
        episode = episode + 1;
      }
      episode = 1
      season = season + i;
    }
  }
  
  return (
    <article>
      <img src={data[index].img} alt={`Affiche de la dernière saison ${data[index].title}`} />
      <div className="infos">
        <h3>{data[index].title}</h3>
        <p>{data[index].episodesStatus.length} saison(s)</p>
        {!data[index].episodesStatus[0][0] ? (<p>{data[index].description}</p>):(<p>prochain épisode à voir : <br /> {nextEpisode(data[index].episodesStatus)}</p>)}
        <button>{buttonMessage(index)}</button>
      </div>
    </article>
  )
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
}

export default Card;
