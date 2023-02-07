import { useState } from "react"

const NewQuote = (props) => {
  const [form, setForm] = useState({
    author: '',
    content: ''
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <main>
        <form>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={form.content}
          placeholder="Create Quote"
          onChange={handleChange}
        />
        <button type="submit">Create Quote</button>
        </form>
      </main>
    </>
  )
}

export default NewQuote