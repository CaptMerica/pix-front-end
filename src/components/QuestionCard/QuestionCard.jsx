import '../QuestionCard/QuestionCard.css'

const QuestionCard = ({question}) => {
  const photo = question.owner.photo

  return (
    <>
        <div className="card-photo-div">
          <img className="card-photo-img" src={photo} alt="ownerPhoto" />
        </div>
        <div className='card-properties'>
          {/* <div>
            <h2>{question.owner.name}</h2>
            <h2>{question.name}</h2>
          </div> */}
          <div>
            <h5>{question.content}</h5>
          </div>
        </div>
    </>
  )
}

export default QuestionCard