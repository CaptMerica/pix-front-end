import QuestionCard from "../../components/QuestionCard/QuestionCard"

const QuestionsList = (props) => {
  return (
    <>
      {props.questions.map((question, idx) => (
        <div>
          <QuestionCard 
            question={question} 
            key={idx}
          />
        </div>
      ))}
    </>
  )
}


export default QuestionsList