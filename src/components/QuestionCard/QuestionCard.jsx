import '../QuestionCard/QuestionCard.css'
import { Link } from "react-router-dom"


const QuestionCard = ({question}) => {
  const photo = question.owner.photo

  return (
    <>
      <Link to={`/questions/${question._id}`}>
        <div className="card-photo-div">
          <img className="card-photo-img" src={photo} alt="ownerPhoto" />
        </div>
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