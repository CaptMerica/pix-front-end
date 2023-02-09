import './QuoteCard.css'


const QuoteCard = ({quote}) => {
  return (
    <>
      <div>
        <img className="profile-img" src={quote.author.photo} alt="profile-img"/>
        <h2>{quote.author.name}</h2>
        <div className='quote-content'>
          <p>{quote.content}</p>
        </div>
      </div>
    </>
  )
}

export default QuoteCard