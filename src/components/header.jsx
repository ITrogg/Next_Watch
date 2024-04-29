import Avatar from "../assets/Avatar.png"
import '../styles/header.css'
import PropTypes from "prop-types";

const Header = ({setNav}) => {
  return (
    <header>
      <h1>Watch This !</h1>
      <ul>
        <li onClick={() => setNav("All")}>Découvrir</li>
        <li onClick={() => setNav("inProgress")}>Séries en cours</li>
        <li onClick={() => setNav("Followed")}>Séries suivies</li>
      </ul>
      <img src={Avatar} alt="Avatar" />
    </header>
  )
}

Header.propTypes = {
  nav: PropTypes.string,
  setNav : PropTypes.func.isRequired
}

export default Header;