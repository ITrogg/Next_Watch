import Avatar from "../assets/Avatar.png"
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <h1>Watch This !</h1>
      <ul>
        <li>Découvrir</li>
        <li>Séries suivies</li>
        <li>Toutes mes séries</li>
      </ul>
      <img src={Avatar} alt="" />
    </header>
  )
}

export default Header;