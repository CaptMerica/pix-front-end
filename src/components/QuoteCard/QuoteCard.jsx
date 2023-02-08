import { Link } from "react-router-dom"


const QuoteCard = ({quote}) => {
  return (
    <>
      <div>
        <h2>{quote.author.name}</h2>
        <h3>{quote.content}</h3>
      </div>
    </>
  )
}

export default QuoteCard