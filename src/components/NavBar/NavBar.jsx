import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='navbar-container'>
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
          <li><Link to="quotes">Quotes</Link></li>
          <li><Link to="/questions">Questions</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </div>
  )
}

export default NavBar
