import QuoteCard from "../../components/QuoteCard/QuoteCard"
import { useParams, Link } from "react-router-dom"

const QuoteList = (props) => {
  console.log(props)

  return (
    <>
      {props.user &&
        <Link to="/quotes/new">
          <button>
            Add Quote
          </button>
        </Link>
      }   
      {props.quotes.map((quote) => (
        <div key={quote._id}>
          <QuoteCard quote={quote} />
          {quote.author &&
            <Link to="/quotes/:id/edit">
              <button>
                Edit Quote
              </button>
            </Link>
          }   
        </div>
      ))}
    </>
  )
}


export default QuoteList