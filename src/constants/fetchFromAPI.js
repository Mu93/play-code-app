import axios from 'axios'
const baseUrl = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RapidAPI_Key,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options)
  return data
}
