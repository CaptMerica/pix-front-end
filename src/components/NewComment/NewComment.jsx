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
    <div className="comment-div">
      <form className="comment-card" onSubmit={handleSubmit}>
        <textarea
          required
          type="text"
          name="content"
          id="comment-input"
          value={form.content}
          placeholder="Add a Comment"
          onChange={handleChange}
        />
        <button className="comment-btn" type="submit">Add a Comment</button>
      </form>
    </div>
  )

}

export default NewComment