import Card from "./card"
import PropTypes from "prop-types";

const Main = ({nav, data}) => {
  return (
    <main>
      <h2>Toutes les séries</h2>
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
        <Card infos={serie} key={serie.title} ></Card>
       ))}
      </section>
    </main>
  )
}

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  nav : PropTypes.string,
}

export default Main

