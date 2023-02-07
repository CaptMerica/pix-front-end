import { useState } from "react"

const NewQuestion = (props) => {
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
          name="name"
          value={form.title}
          placeholder="Add optional body text"
          onChange={handleChange}
        />
        <button type="submit">Create Question</button>
      </form>
    </div>
  )
}

export default NewQuestion


//   return (
//     <main className={styles.container}>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title-input">Title</label>
//         <input
//           required
//           type="text"
//           name="title"
//           id="title-input"
//           value={form.title}
//           placeholder="Title"
//           onChange={handleChange}
//         />
//         <label htmlFor="text-input">Text</label>
// 				<textarea
//           required
//           type="text"
//           name="text"
//           id="text-input"
//           value={form.text}
//           placeholder="Text"
//           onChange={handleChange}
//         />
//         <label htmlFor="category-input">Category</label>
//         <select
//           required
//           name="category"
//           id="category-input"
//           value={form.category}
//           onChange={handleChange}
//         >
//           <option value="News">News</option>
//           <option value="Games">Games</option>
//           <option value="Music">Music</option>
//           <option value="Movies">Movies</option>
//           <option value="Sports">Sports</option>
//           <option value="Television">Television</option>
//         </select>
//         <button type="submit">SUBMIT</button>
//       </form>
//     </main>
//   )
// }

// export default NewBlog