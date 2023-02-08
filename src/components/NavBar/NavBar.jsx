import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='navbar'>
      <div className='icon-div'>
        <h1>ICON</h1>
      </div>
      <div className='button-div'>
        {user ?
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/questions">Questions</Link></li>
            <li><Link to="/questions/new">New Question</Link></li>
            <li><Link to="quotes">Quotes</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        :
          <ul>
            <li>
              <Link to="quotes">
                <button className='nav-btn'>Quotes</button>
              </Link>
            </li>
            <li>
              <Link to="/questions">
                <button className='nav-btn'>Questions</button>
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
