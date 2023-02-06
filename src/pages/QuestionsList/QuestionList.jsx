

const QuestionsList = (props) => {
  return (
    <>
    <ul>
      {props.questions.map((question) => (
        <l1>
          <h1>{question.name}</h1>
          <h2>{question.owner}</h2>
        </l1>
      ))}
    </ul>
    </>
  )
}


export default QuestionsList