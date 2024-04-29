import Card from "./card"
import PropTypes from "prop-types";

const Main = ({nav, data, followedTitles, setFollow, currentEpisodes, setCurrent}) => {
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
      <form action="">
        <label htmlFor="">
          Tier par :
          <select name="" id="">
            <option value="">Alphabétique</option>
            <option value="">Date de sortie</option>
            <option value="">Aléatoire</option>
          </select>
        </label>
      </form>
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
        <Card infos={serie} followedTitles={followedTitles} setFollow={setFollow} currentEpisodes={currentEpisodes} setCurrent={setCurrent} key={serie.title} ></Card>
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
  setFollow: PropTypes.func,
  currentEpisodes: PropTypes.array,
  setCurrent: PropTypes.func,
}

export default Main

