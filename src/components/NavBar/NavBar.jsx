import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../../src/assets/teal-pick.png'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='navbar'>
      <div className='icon-div'>
        <img id='logo'src={logo} alt='teal-pick' />
      </div>
      <div className='button-div'>
        {user ?
          <ul>
            <li>
              <Link to="/questions">
                <button className='nav-btn'>Questions</button>
              </Link>
            </li>
            <li>
              <Link to="/questions/new">
                <button className='nav-btn'>New Questions</button>
              </Link>
            </li>
            <li>
              <Link to="quotes">
                <button className='nav-btn'>Quotes</button>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleLogout}>
                <button className='nav-btn'>Log Out</button>
              </Link>
            </li>
          </ul>
        :
          <ul>
            <li>
              <Link to="/questions">
                <button className='nav-btn'>Questions</button>
              </Link>
            </li>
            <li>
              <Link to="quotes">
                <button className='nav-btn'>Quotes</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className='nav-btn'>Log In</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className='nav-btn'>Sign Up</button>
              </Link>
              </li>
          </ul>
        }
      </div>
    </div>
  )
}

export default NavBar
