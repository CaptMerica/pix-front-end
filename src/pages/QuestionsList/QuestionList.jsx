import '../QuestionsList/QuestionsList.css'
import QuestionCard from "../../components/QuestionCard/QuestionCard"
import { Link } from 'react-router-dom'

const QuestionsList = (props) => {
  return (
    <section className="questions-list">
      {props.questions.map((question, idx) => (
        <Link key={idx} to={`/questions/${question._id}`}>
        <div className="question-card">
          <QuestionCard 
            question={question}
          />
        </div>
        </Link>
      ))}
    </section>
  )
}


export default QuestionsList