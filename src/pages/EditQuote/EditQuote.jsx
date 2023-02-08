import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditQuote.module.css'

const EditQuote = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateQuote(form)
    setForm({ content: '' })
  }

  console.log("FORM DATA", form)

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
        <button type="submit">Edit Quote</button>
      </form>
    </main>
  )
}

export default EditQuote