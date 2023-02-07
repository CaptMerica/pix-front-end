import { useState } from "react"

const EditQuestion = (props) => {
  const [form, setForm] = useState({
    name: '',
    content: ''
  })

  const handleChange = ({target}) => {
    setForm({ ...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddQuestion(form)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            required
            autoComplete="off"
            type="text"
            name="name"
            value={form.title}
            placeholder="Add a title"
            onChange={handleChange}
          />
        <textarea
          type="text"
          name="content"
          value={form.content}
          placeholder="Add optional body text"
          onChange={handleChange}
        />
        <button type="submit">Create Question</button>
      </form>
    </div>
  )
}

export default EditQuestion