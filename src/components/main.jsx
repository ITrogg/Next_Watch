import Card from "./card"
import PropTypes from "prop-types";

const Main = ({data}) => {
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
       {data.map((serie) => (
        <Card infos={serie} key={serie.title} ></Card>
       ))}
      </section>
    </main>
  )
}

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Main