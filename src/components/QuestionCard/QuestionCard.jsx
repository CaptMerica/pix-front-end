import { Link } from "react-router-dom"


const QuestionCard = ({question}) => {
  return (
    <>
      <Link to={`/questions/${question._id}`}>
        <div className="question-owner">
          <h2>{question.owner.name}</h2>
          <h2>{question.name}</h2>
        </div>
        <div className="question-content">
          <h5>{question.content}</h5>
        </div>
      </Link >
    </>
  )
}

export default QuestionCard