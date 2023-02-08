import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { deleteComment, show } from "../../services/questionService"
import { createComment } from "../../services/questionService"
import NewComment from "../NewComment/NewComment"


const QuestionDetails = () => {
  const [ questionDetails, setQuestionDetails ] = useState(null)
  const { id } = useParams()

  const handleAddComment = async (commentData) => {
    const newComment = await createComment(id, commentData)
    setQuestionDetails({ ...questionDetails, comments: [...questionDetails.comments, newComment] })
  }

  // const handleDeleteComment = async (commentData) => {
  //   const deleteComment = await deleteComment(id, commentData)
  //   setQuestionDetails({...questionDetails, comments: questionDetails.comments.filter((c) =>c._id !==commentId) })
  // }


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
        <h2>Comments</h2>
        <NewComment handleAddComment={handleAddComment} />
        <ul>
          {questionDetails.comments.map((comment) => (
            <li key={comment._id}>
              {comment.content}
            </li>
          ))}
          {/* <deleteComment handleDeleteComment={handleDeleteComment} /> */}
        </ul>
      </section>
    </>
  )
}



export default QuestionDetails