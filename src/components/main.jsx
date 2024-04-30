import { useEffect, useState } from "react";
import Card from "./card"
import PropTypes from "prop-types";

const Main = ({nav, data, startFollow, nextEpisode}) => {
  const [sortValue, setSortValue] = useState("");
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    // Sort data when sortValue changes
    const sorted = [...data].sort((a, b) => compare(a, b, sortValue));
    setSortedData(sorted);
  }, [sortValue, data]);

  const handleSort = event => {
    setSortValue(event.target.value);
  };

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

  const compare = (a, b, param) => {
    const maxA = a.nbEpisodes.reduce((a,b) => a + b,0);
    const maxB = b.nbEpisodes.reduce((a,b) => a + b,0);
    let progressA = a.lastSeen[1];
    let progressB = b.lastSeen[1];
    for (let i = 0; i < a.lastSeen[0]-1; i++) {
      progressA += a.nbEpisodes[i];     
    }
    for (let i = 0; i < b.lastSeen[0]-1; i++) {
      progressB += b.nbEpisodes[i];     
    }

    switch (param) {
      case 'alphabet':
        if (a.title < b.title)
          return -1;
        if (a.title > b.title )
          return 1;
        return 0; 
      case 'date':
        if (a.date > b.date)
          return -1;
        if (a.date < b.date )
          return 1;
        return 0; 
      case 'progress':
        if ((progressA/maxA) > (progressB/maxB))
          return -1;
        if ((progressA/maxA) < (progressB/maxB))
          return 1;
        return 0;
      default:
        return 0;
    } 
  }

  return (
    <main>
      {title()}
      <label htmlFor="sort">
        Trier par :
        <select onChange={handleSort} name="sort" id="sort">
          <option value="">Par défaut</option>
          <option value="alphabet">Alphabétique</option>
          <option value="date">Date de sortie</option>
          <option value="progress">Progression</option>
        </select>
      </label>     
      <section className="cards">
        {sortedData.filter((serie) => {
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

export default Main;