import Axios from "axios"

const Movie_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=509a269d";

const instance = Axios.create({
   baseURL: Movie_URL,
   responseType: 'json'  
})

export default instance;