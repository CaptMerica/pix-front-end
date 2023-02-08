import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditQuestion = (props) => {
  const {state} = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = ({target}) => {
    setForm({ ...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateQuestion(form)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            required
            autoComplete="off"
            type="text"
            name="name"
            value={form.name}
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
        <button type="submit">Submit Edit</button>
      </form>
    </div>
  )
}

export default EditQuestion