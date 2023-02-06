

const QuestionDetails = ({questions}) => {
  console.log(questions)
  return (
    <>
    <section>
      <div>
        <h2>
          {questions.name}
        </h2>
      </div>
    </section>
    </>
  )
}


export default QuestionDetails