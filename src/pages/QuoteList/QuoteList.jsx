import QuoteCard from "../../components/QuoteCard/QuoteCard"

const QuoteList = (props) => {
  return (
    <>
      {props.quotes.map((quote, idx) => (
        <div key={idx}>
          <QuoteCard quote={quote} />
        </div>
      ))}
    </>
  )
}


export default QuoteList