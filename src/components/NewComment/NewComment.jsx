import { useState } from "react";
import styles from './NewComment.module.css'

const NewComment = (props) => {
  const [form, setForm] = useState({ content: '' })
  
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddComment(form)
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
          placeholder="Add a Comment"
          onChange={handleChange}
        />
        <button type="submit">Add a Comment</button>
      </form>
    </div>
  )

}

export default NewComment