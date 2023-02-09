import '../QuestionCard/QuestionCard.css'

const QuestionCard = ({question}) => {
  const guestPhoto = 'https://i.imgur.com/ewVejEX.png'
  const photo = question.owner.photo ? question.owner.photo : guestPhoto

  return (
    <>
      <div className="card-photo-div">
        <img className="card-photo-img" src={photo} alt="ownerPhoto" />
        <h2>{question.owner.name}</h2>
      </div>

      <div className='card-properties'>
        <div>
          <h2 className='card-text'>{question.title}</h2>
        </div>
        <div className='card-content'>
          <h5 className='card-text'>{question.content}</h5>
        </div>
      </div>
    </>
  )
}

export default QuestionCard