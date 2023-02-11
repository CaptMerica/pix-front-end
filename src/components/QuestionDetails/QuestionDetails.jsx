import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { deleteComment, show } from "../../services/questionService"
import { createComment } from "../../services/questionService"
import NewComment from "../NewComment/NewComment"
import './QuestionDetails.css'

const QuestionDetails = (props) => {
  const [ questionDetails, setQuestionDetails ] = useState(null)
  const { id } = useParams()

  const handleAddComment = async (commentData) => {
    const newComment = await createComment(id, commentData)
    setQuestionDetails({ ...questionDetails, comments: [...questionDetails.comments, newComment] })
  }

  const handleDeleteComment = async (questionId, commentId) => {
    const updatedQuestion = await deleteComment(questionId, commentId)
    setQuestionDetails(updatedQuestion)
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
    <main className="question-details-main">
      <section id="question-box">
        <div className="question-details">
          <h2>
            {questionDetails.owner.name}
          </h2>
          <h4>
            {questionDetails.name}
          </h4>
        </div>
        <div className="question-text">
          {questionDetails.content}
        </div>
        <div>
          {props.user && questionDetails.owner._id === props.user.profile &&
            <>
              <Link 
                to={`/questions/${id}/edit`} 
                state={questionDetails}>
                <button className="question-edit">Edit Question</button>
              </Link>
              <button className="question-delete" onClick={() => props.handleDeleteQuestion(id)}>Delete Question</button>
            </>
          }
        </div>
      </section>


      <div className="comments-container">
        <div className="comment-header">Comments</div>
          <div className="comment-container">
            {props.user && <NewComment handleAddComment={handleAddComment} />}
            <div className="comment-text" >
              {questionDetails.comments.map((comment) => (
                <div className="comment-card">
                  <p key={comment._id} className="comment-item">
                    {comment.content}
                  </p>
                  {comment.commenter._id === props.user?.profile &&
                    <button className="delete-btn" onClick={() => handleDeleteComment(questionDetails._id, comment._id)}>Delete</button>
                  }
                </div>
              ))}
            </div>
        </div>
      </div>
    </main>
  )
}



export default QuestionDetails