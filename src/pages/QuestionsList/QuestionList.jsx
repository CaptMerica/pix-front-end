import '../QuestionsList/QuestionsList.css'
import QuestionCard from "../../components/QuestionCard/QuestionCard"

const QuestionsList = (props) => {
  return (
    <section className="questions-list">
      {props.questions.map((question, idx) => (
        <div className="question-card" key={idx}>
          <QuestionCard 
            question={question}
          />
        </div>
      ))}
    </section>
  )
}


export default QuestionsList