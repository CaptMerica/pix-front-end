import { useState } from "react"
import { useLocation } from "react-router-dom"
import './EditQuote.css'

const EditQuote = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateQuote(form)
    setForm({ content: '' })
  }

  return (
    <div className="form-div">
      <form className="form-card" onSubmit={handleSubmit}>
        <h4 className="edit-header">Edit Quote</h4>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={form.content}
          placeholder="Edit Quote"
          onChange={handleChange}
        />
        <button className="form-btn" type="submit">Submit Edit</button>
      </form>
    </div>
  )
}

export default EditQuote