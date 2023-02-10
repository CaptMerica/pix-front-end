import './QuoteCard.css'


const QuoteCard = ({quote}) => {

  const guestPhoto = 'https://i.imgur.com/ewVejEX.png'
  const photo = quote.author.photo ? quote.author.photo : guestPhoto

  return (
    <>
      <div>
        <img className="profile-img" src={photo} alt="profile-img"/>
        <h2>{quote.author.name}</h2>
        <div className='quote-content'>
          <p>{quote.content}</p>
        </div>
      </div>
    </>
  )
}

export default QuoteCard
