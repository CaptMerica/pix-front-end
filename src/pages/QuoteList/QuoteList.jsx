import QuoteCard from "../../components/QuoteCard/QuoteCard"
import NewQuote from "../NewQuote/NewQuote"

const QuoteList = (props) => {
  console.log(props)
  return (
    <>
      <a href="/quotes/new">
        <button>
          Add Quote
        </button>
      </a>
      {props.quotes.map((quote) => (
        <div key={quote._id}>
          <QuoteCard quote={quote} />
        </div>
      ))}
    </>
  )
}


export default QuoteList