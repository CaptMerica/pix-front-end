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
        <button className="add-btn" type="submit">Add a Comment</button>
        </div>
      </form>
          </div>
    </div>
  )

//   <div id=“quote-container”>
//         <div className=“quote-card”>
//           <div className=“quote-photo”>
//             <img src=“” alt=“”/>
//           </div>
//           <div className=“quote-text”>
//             <p>Quote Text</p>
//           </div>
//           <div className=“quote-btns”>
//             <button className=“quote-btn”>Edit Quote</button>
//             <button className=“quote-btn”>Delete Quote</button>
//           </div>
//         </div>
//       </div>

}

export default NewComment