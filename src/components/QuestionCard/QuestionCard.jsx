import { Link } from "react-router-dom"
import '../../../src/components/QuestionCard/QuestionCard.css'


const QuestionCard = ({question}) => {
  return (
    <div className="card-div">
      <Link to={`/questions/${question._id}`}>
          <div>
            <h2>{question.owner?.name}</h2>
            <h2>{question.title}</h2>
          </div>
          <div>
            <h5>{question.content}</h5>
          </div>
      </Link >
    </div>
  )
}

export default QuestionCard