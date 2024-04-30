import Card from "./card"
import PropTypes from "prop-types";

const Main = ({nav, data, startFollow, nextEpisode}) => {
  const title = () => {
    switch (nav) {
      case 'All':
        return <h2>Toutes les séries</h2> 
      case 'Followed':
        return <h2>Séries en cours</h2>
      case 'inProgress':
        return <h2>Séries suivies</h2>
      default:
        return <h2>Séries</h2>
}
  }
  return (
    <main>
      {title()}
      <label htmlFor="sort">
        Tier par :
        <select name="sort" id="sort">
          <option value="">Par défaut</option>
          <option value="alphabet">Alphabétique</option>
          <option value="date">Date de sortie</option>
          <option value="random">Aléatoire</option>
        </select>
      </label>     
      <section className="cards">
       {data.filter((serie) => {
          if (nav === "Followed"){
            return serie.isFollowed;
          } else if (nav === "inProgress"){
            return serie.lastSeen; 
          } else {
            return true
          }
        }).map((serie) => (
        <Card infos={serie} data={data} nextEpisode={nextEpisode} startFollow={startFollow} key={serie.title} ></Card>
       ))}
      </section>
    </main>
  )
}

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    description : PropTypes.string,
    nbSeasons : PropTypes.number,
    nbEpisodes : PropTypes.array,
    lastSeen : PropTypes.array,
  })),
  nav : PropTypes.string,
  followedTitles : PropTypes.array,
  startFollow: PropTypes.func,
  currentEpisodes: PropTypes.array,
  nextEpisode: PropTypes.func,
}

export default Main

