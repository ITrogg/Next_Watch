import { useEffect, useState } from "react";
import Card from "./card"
import PropTypes from "prop-types";
import '../styles/header.css';
import '../styles/App.css';
import '../styles/card.css';

const Main = ({nav, data, startFollow, nextEpisode}) => {
  const [sortValue, setSortValue] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const handleSort = event => {
    setSortValue(event.target.value);
  };
  useEffect(() => {
    // Sort data when sortValue changes
    const sorted = [...data].sort((a, b) => compare(a, b, sortValue));
    setSortedData(sorted);
  }, [sortValue, data]);

  const calculProgress = (infos) => {
    let total = 0;
    for (let i = 0; i < infos.nbEpisodes.length; i++){
      total = total + infos.nbEpisodes[i];
    }
    let count = infos.lastSeen[1];
    for (let i = 0; i < infos.lastSeen[0]-1; i++) {
      count = count + infos.nbEpisodes[i];      
    }
    const progress = count/total*100;
    return progress;
  }
  const compare = (a, b, param) => {
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
        if ((calculProgress(a)) > (calculProgress(b)))
          return -1;
        if ((calculProgress(a)) < (calculProgress(b)))
          return 1;
        return 0;
      default:
        return 0;
    } 
  }
  const title = () => {
    switch (nav) {
      case 'All':
        return <h2>Toutes les séries</h2> 
      case 'Followed':
        return <h2>Séries suivies</h2>
      case 'inProgress':
        return <h2>Séries en cours</h2>
      default:
        return <h2>Séries</h2>
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
            return (calculProgress(serie) < 100 && calculProgress(serie) > 0); 
          } else {
            return true
          }
        }).map((serie) => (
          <Card infos={serie} data={data} nextEpisode={nextEpisode} startFollow={startFollow} calculProgress={calculProgress} key={serie.title} ></Card>
        ))}
      </section>
    </main>
  )
}

Main.propTypes = {
  data: PropTypes.array,
  nav : PropTypes.string,
  followedTitles : PropTypes.array,
  startFollow: PropTypes.func,
  nextEpisode: PropTypes.func,
}

export default Main;