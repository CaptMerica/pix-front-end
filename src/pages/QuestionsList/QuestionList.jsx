import QuestionCard from "../../components/QuestionCard/QuestionCard"

const QuestionsList = (props) => {
  return (
    <>
      {props.questions.map((question, idx) => (
        <div key={idx}>
          <QuestionCard 
            question={question}
          />
        </div>
      ))}
    </>
  )
}


export default QuestionsList