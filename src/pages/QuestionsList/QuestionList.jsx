import QuestionDetails from "../../components/QuestionDetails/QuestionDetails"

const QuestionsList = (props) => {
  return (
    <>
    {props.questions.map}
      <QuestionDetails details={details}/>
    </>
  )
}


export default QuestionsList