import { useState } from "react"
import './NewQuote.css'

const NewQuote = (props) => {
  const [form, setForm] = useState({
    content: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddQuote(form)
  }

  return (
    <div className="form-div">
      <form className="form-card" onSubmit={handleSubmit}>
        <h4 className="edit-header">Create Quote</h4>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={form.content}
          placeholder="Type Here!"
          onChange={handleChange}
        />
        <button className="form-btn" type="submit">
          Submit Quote
        </button>
      </form>
    </div>
  )
}

export default NewQuote