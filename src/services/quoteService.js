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
  console.log(quoteData);
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

export { 
  index,
  create,
}