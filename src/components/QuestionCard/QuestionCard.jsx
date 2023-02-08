import { Link } from "react-router-dom"


const QuestionCard = ({question}) => {
  return (
    <>
      <Link to={`/questions/${question._id}`}>
        <div>
          <h2>{question.owner.name}</h2>
          <h2>{question.name}</h2>
        </div>
        <div>
          <h5>{question.content}</h5>
        </div>
      </Link >
    </>
  )
}

export default QuestionCard