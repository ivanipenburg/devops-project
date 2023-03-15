import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <h1>Living.space</h1>
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/household">Household</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar