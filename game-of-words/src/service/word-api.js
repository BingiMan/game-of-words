import axios from 'axios'

// const BASE_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/love?key=${KEY}`
// https://www.dictionaryapi.com/api/v3/references/collegiate/json/test?key=715c01ee-1458-4d7b-b390-02d4f8cadf26

// const KEY = '375deba45fmshaa667e482c4ca16p14e3c0jsn7fadc8176947'
const KEY = '715c01ee-1458-4d7b-b390-02d4f8cadf26'
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     // 'X-Mashape-Key': `${KEY}`,
//     // "Accept": "application/json"
//     'Authorization': `Bearer ${KEY}`
//   }
// });

export const fetchData = async () => {
  const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/love?key=715c01ee-1458-4d7b-b390-02d4f8cadf26`)
  return response.data;
}
