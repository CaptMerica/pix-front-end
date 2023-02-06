import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { show } from "../../services/questionService"
import { createComment } from "../../services/questionService"

const QuestionDetails = () => {
  const [ questionDetails, setQuestionDetails ] = useState(null)
  const { id } = useParams()

  const handleAddComment = async (commentData) => {
    const newComment = await createComment(id, commentData)
    setQuestionDetails({ ...questionDetails, comments: [...questionDetails.comments, newComment] })
  }

  const newComment = (questionDetails) => {
    const [form, setForm] = useState({ content: '' })
  
    const handleChange = ({ target }) => {
      setForm({ ...form, [target.name]: target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      handleAddComment(form)
      setForm({ content: '' })
    }

  useEffect(() => {
    const fetchDetails = async () => {
      const questionData = await show (id)
      setQuestionDetails(questionData)
    }
    fetchDetails()
  }, [id])

  if (!questionDetails) return <h1>Loading</h1>

  return (
    <>
      <section>
        <div>
          <h2>
            {questionDetails.name}
          </h2>
          <h4>
            {questionDetails.owner.name}
          </h4>
        </div>
        <main>
          {questionDetails.content}
        </main>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <textarea
            required
            type="text"
            name="content"
            id="content-input"
            value={questionDetails.comment.content}
            placeholder="Add a Comment"
            onChange={handleChange}
          />
        <button type="submit">Add a Comment</button>
        </form>
      <ul>
        {questionDetails.comments.map((comment) => (
          <li>
            {comment.content}
          </li>
        ))}
      </ul>
      </section>
    </>
  )
}
}



export default QuestionDetails