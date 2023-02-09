import QuoteCard from "../../components/QuoteCard/QuoteCard"
import { useParams, Link } from "react-router-dom"



const QuoteList = (props) => {
  return (
    <div className="quote-list-container">
        <div className="add-quote-btn">
        {props.user &&
          <Link to="/quotes/new">
            <button>
              Add Quote
            </button>
          </Link>
        }
      </div>   
      {props.quotes.map((quote) => (
        <div key={quote._id}>
          <QuoteCard quote={quote} />
          {quote.author._id === props.user?.profile &&
            <>
              <Link to="/quotes/:id/edit" state={quote}>
                <button>
                  Edit Quote
                </button>
              </Link>
              <button onClick={() => props.handleDeleteQuote(quote._id)}>Delete</button>
            </>
          }   
        </div>
      ))}
    </div>
  )
}


export default QuoteList