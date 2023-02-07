import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to="/questions">Questions</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
        </ul>
      :
      <ul>
          <li><Link to="/questions">Questions</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
