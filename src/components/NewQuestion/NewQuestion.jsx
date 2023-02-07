import { useState } from "react"

const NewQuestion = (props) => {
  const [form, setForm] = useState({
    name: '',
    content: ''
  })

  const handleChange = ({target}) => {
    setForm({ ...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  )
}

export default NewQuestion
