import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { show } from "../../services/questionService"

const QuestionDetails = () => {
  const [ questionDetails, setQuestionDetails ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const questionData = await show (id)
      setQuestionDetails(questionData)
    }
    fetchDetails()
  }, [id])

  console.log(questionDetails);
  if (!questionDetails) return <h1>Loading</h1>

  return (
    <>
    <section>
      <div>
        <h2>
          {questionDetails.name}
        </h2>
        <h4>
          {questionDetails.owner.name}
        </h4>
      </div>
      <main>
        {questionDetails.content}
      </main>
    </section>
    </>
  )
}


export default QuestionDetails