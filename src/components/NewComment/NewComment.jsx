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
    setForm({content: ''})
  }

  return (
    <div className="comments-container">
      <form className="add-comment-section" onSubmit={handleSubmit}>
        <textarea
          required
          type="text"
          name="content"
          id="comment-input"
          value={form.content}
          placeholder="Add a Comment"
          onChange={handleChange}
        />
        <div className="add-btn-section">
          <button className="add-btn" type="submit">Add a Comment</button>
        </div>
      </form>
    </div>
  )

}

export default NewComment