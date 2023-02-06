

const QuestionDetails = (props) => {
  return (
    <>
    <ul>
      {props.questions.map((question) => (
        <l1>
          <div>
          <h1>{question.owner}</h1>
          <h3>{question.name}</h3>
          </div>
          <div>
            {question.content}
          </div>
          <div>
            {question.comments.map((comment) => (
              <h4>{comment.content}</h4>
            ))}
          </div>
        </l1>
      ))}
    </ul>
    </>
  )
}


export default QuestionDetails