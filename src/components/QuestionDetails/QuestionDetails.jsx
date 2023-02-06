import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { show } from "../../services/questionService"

const QuestionDetails = () => {
  const [ questionDetails, setQuestionDetails ] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const questionData = await show (id)
      setQuestionDetails(questionData)
    }
    fetchDetails()
  }, [id])

  return (
    <>
    <section>
      <div>
        <h2>
          {questionDetails.name}
        </h2>
      </div>
    </section>
    </>
  )
}


export default QuestionDetails