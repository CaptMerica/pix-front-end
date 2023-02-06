import QuestionCard from "../../components/QuestionCard/QuestionCard"

const QuestionsList = (props) => {
  return (
    <>
      {props.questions.map((question) => (
        <div>
          <QuestionCard question={question} key={question._id}/>
        </div>
      ))}
    </>
  )
}


export default QuestionsList