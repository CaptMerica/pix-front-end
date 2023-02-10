import { useState } from "react"
import './NewQuestion.css'

const NewQuestion = (props) => {
  const [form, setForm] = useState({
    title: '',
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
    <div className="form-div">
        <form className="form-card" onSubmit={handleSubmit}>
          <h4 className="edit-header">New Question</h4>
          <input
            required
            autoComplete="off"
            type="text"
            name="title"
            id="question-input"
            value={form.title}
            placeholder="Add a title"
            onChange={handleChange}
          />
        <textarea
          type="text"
          name="content"
          id="content-input"
          value={form.content}
          placeholder="Add optional body text"
          onChange={handleChange}
        />
        <button className="form-btn" type="submit">Create Question</button>
      </form>
    </div>
  )
}

export default NewQuestion