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
    <main>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={form.content}
          placeholder="Edit Quote"
          onChange={handleChange}
        />
        <button type="submit">Submit Edit</button>
      </form>
    </main>
  )
}

export default EditQuote