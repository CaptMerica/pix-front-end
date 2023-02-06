import * as questionService from "./tokenService"


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


export {
  index
}