import axios from 'axios'

const BASE_URL = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf'
const KEY = '375deba45fmshaa667e482c4ca16p14e3c0jsn7fadc8176947'
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Mashape-Key': `${KEY}`
  }
});

export const fetchData = async () => {
  const response = await api.get(`${BASE_URL}`)
  return response.data;
}