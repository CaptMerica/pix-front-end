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
          {quote.author._id === props.user.profile &&
            <>
              <Link to="/quotes/:id/edit" state={quote}>
                <button>
                  Edit Quote
                </button>
              </Link>
              <button>Delete</button>
            </>
          }   
        </div>
      ))}
    </>
  )
}


export default QuoteList