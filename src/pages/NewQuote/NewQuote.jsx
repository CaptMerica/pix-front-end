import { useState } from "react"

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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={form.content}
          placeholder="Create Quote"
          onChange={handleChange}
        />
        <button type="submit">
          Create Quote
        </button>
      </form>
    </div>
  )
}

export default NewQuote