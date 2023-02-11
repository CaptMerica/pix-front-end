import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignupForm.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <div className='signup-form-container'>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        action='#'
      >
        <h2 className='form-header'>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
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
            value={password}
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm">
            Confirm Password:
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            required
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo-upload">
            Upload Photo:
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>
        <div className='form-group form-actions'>
          <button className="submit-btn">
            Sign Up
          </button>
          <Link to="/">
            <button className="cancel-btn">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
