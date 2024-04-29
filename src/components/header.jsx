import Avatar from "../assets/Avatar.png"
import '../styles/header.css'
import PropTypes from "prop-types";

const Header = ({setNav}) => {
  return (
    <header>
      <h1>Watch This !</h1>
      <ul>
        <li onClick={() => setNav(0)}>Découvrir</li>
        <li onClick={() => setNav(1)}>Séries suivies</li>
        <li onClick={() => setNav(2)}>Toutes mes séries</li>
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