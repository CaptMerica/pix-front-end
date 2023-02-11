import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/quotes`

// https://localhost:3001/quotes
const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const create = async (quoteData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'COntent-Type': 'application/json'
      },
      body: JSON.stringify(quoteData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (quoteData) => {
  try {
    const res = await fetch(`${BASE_URL}/${quoteData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quoteData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
const deleteQuote = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  index,
  create,
  update,
  deleteQuote
}