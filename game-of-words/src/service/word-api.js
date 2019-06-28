import axios from 'axios'

const BASE_URL = `https://wordsapiv1.p.rapidapi.com/words/?random=true`
const KEY = '375deba45fmshaa667e482c4ca16p14e3c0jsn7fadc8176947'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Mashape-Key': `${KEY}`,
    "Accept": "application/json"
  }
});
export const fetchData = async () => {
  const response = await api.get(`${BASE_URL}`)
  console.log(response.data)
  return response.data;
}



// `https://www.dictionaryapi.com/api/v3/references/collegiate/json/love?key=715c01ee-1458-4d7b-b390-02d4f8cadf26`
// const KEY = '715c01ee-1458-4d7b-b390-02d4f8cadf26'
// 'Authorization': `Bearer ${KEY}`