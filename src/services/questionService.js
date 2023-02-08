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

const update = async (questionData) => {
  try{
    const res = await fetch(`${BASE_URL}/${questionData._id}`, {
      method: 'PUT',
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

const deleteQuestion = async (id) => {
  try {
    const res = await fetch (`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const updateComment = async (questionId, commentId, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${questionId}/comments/${commentId}`, {
      method: 'PUT',
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
  
const deleteComment = async (questionId, commentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${questionId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error){
    console.log(error);
  }
}


export {
  index,
  show,
  create,
  update,
  deleteQuestion,
  createComment,
  updateComment,
  deleteComment
}