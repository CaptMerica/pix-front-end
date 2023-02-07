import CommentCard from '../CommentCard/CommentCard'

const Comments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <>
      {props.comments.map((comment) => (
        <CommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
        />
      ))}
    </>
  )
}

export default Comments