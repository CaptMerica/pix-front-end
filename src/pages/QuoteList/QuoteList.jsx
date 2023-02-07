import QuoteCard from "../../components/QuoteCard/QuoteCard"
import NewQuote from "../NewQuote/NewQuote"

const QuoteList = (props) => {
  console.log(props)
  return (
    <>
      <NewQuote to="quotes/new">New Quote</NewQuote>
      {props.quotes.map((quote) => (
        <div key={quote._id}>
          <QuoteCard quote={quote} />
        </div>
      ))}
    </>
  )
}


export default QuoteList