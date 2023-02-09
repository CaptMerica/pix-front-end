import { useState } from "react";
import './NewComment.css'

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
    <div id="comment-container">
      <div className="comment-card">
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
        <div>
        <button type="submit">Add a Comment</button>
        </div>
      </form>
          </div>
    </div>
  )
}

export default NewComment