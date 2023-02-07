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
    setForm({ content: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={props.comments.content}
          placeholder="Add a Comment"
          onChange={handleChange}
        />
        <button type="submit">Add a Comment</button>
      </form>
    </>
  )

}

export default NewComment