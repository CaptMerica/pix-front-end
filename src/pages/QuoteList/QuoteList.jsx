import QuoteCard from "../../components/QuoteCard/QuoteCard"
import { Link } from "react-router-dom"
import './QuoteList.css'



const QuoteList = (props) => {
  return (
  <>
    <h1 className="quote-title">Quotes</h1>
    <div className="add-quote-container">
      {props.user &&
        <Link to="/quotes/new">
          <button id="add-quote-btn">Add Quote</button>
        </Link>
      }
    </div>
    <div className="quote-container"> 
      {props.quotes.map((quote) => (
        <div className="quote-card" key={quote._id}>
          <QuoteCard quote={quote} />
          {quote.author._id === props.user?.profile &&
            <div className="quote-btns">
              <Link to="/quotes/:id/edit" state={quote}>
                <button className="quote-btn">Edit Quote</button>
              </Link>
              <button className="quote-btn" onClick={() => props.handleDeleteQuote(quote._id)}>
                Delete
              </button>
            </div>
          }   
        </div>
      ))}
    </div>  
  </>
)
}


export default QuoteList