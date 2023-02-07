import * as tokenService from "./tokenService"


// https://localhost:3001/questions
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/questions`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const create = async (questionData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(questionData)
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const createComment = async (id, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  // update,
  // deleteBlog,
  createComment,
}