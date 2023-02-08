import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { deleteComment, show } from "../../services/questionService"
import { createComment } from "../../services/questionService"
import NewComment from "../NewComment/NewComment"

const QuestionDetails = (props) => {
  const [ questionDetails, setQuestionDetails ] = useState(null)
  const { id } = useParams()

  const handleAddComment = async (commentData) => {
    const newComment = await createComment(id, commentData)
    setQuestionDetails({ ...questionDetails, comments: [...questionDetails.comments, newComment] })
  }

  const handleDeleteComment = async (questionId, commentId) => {
    const deletedComment = await deleteComment(questionId, commentId)
    setQuestionDetails({ ...questionDetails, comments: questionDetails.comments.filter((c) => c._id !== deletedComment._id) })
  }

  useEffect(() => {
    const fetchDetails = async () => {
      const questionData = await show (id)
      setQuestionDetails(questionData)
    }
    fetchDetails()
  }, [id])

  if (!questionDetails) return <h1>Loading</h1>
  if (!questionDetails.comments) return <h1>Loading</h1>

  return (
    <>
      <section>
        <div>
          <h2>
            {questionDetails.owner.name}
          </h2>
          <h4>
            {questionDetails.name}
          </h4>
        </div>
        <main>
          {questionDetails.content}
        </main>
        <div>
          {questionDetails.owner._id === props.user.profile &&
            <>
              <Link 
                to={`/questions/${id}/edit`} 
                state={questionDetails}>
                <button>Edit Question</button>
                </Link>
                <button onClick={() => props.handleDeleteQuestion(id)}>Delete Question</button>
            </>
          }
        </div>
      </section>
      <section>
        <h2>Comments</h2>
        {props.user && 
        <NewComment handleAddComment={handleAddComment} />
        }
        <ul>
          {questionDetails.comments.map((comment) => (
            <li key={comment._id}>
              {comment.content}
              <button onClick={() => handleDeleteComment(questionDetails._id, comment._id)}>Delete Comment</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}



export default QuestionDetails