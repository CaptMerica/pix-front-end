import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <div className='login-form-container'>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        // className={styles.container}
      >
        <h2 className='form-header'>Log In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-group form-actions'>
          <div>
            <button className="login-btn">Log In</button>
            <Link to="/">
              <button className="cancel-btn">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
