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
    <div className="new-ques-div">
        <form className="new-ques-card" onSubmit={handleSubmit}>
          <h4 id="new-ques-header">New Question</h4>
          <input
            required
            autoComplete="off"
            type="text"
            name="title"
            id="new-ques-input"
            value={form.title}
            placeholder="Add a title"
            onChange={handleChange}
          />
        <textarea
          type="text"
          name="content"
          id="new-ques-content"
          value={form.content}
          placeholder="Add optional body text"
          onChange={handleChange}
        />
        <button className="new-ques-btn" type="submit">Create Question</button>
      </form>
    </div>
  )
}

export default NewQuestion