import Axios from "axios";

// add your title and api key
const Movie_URL = "http://www.omdbapi.com/";

const instance = Axios.create({
  baseURL: Movie_URL,
  responseType: "json",
});

export default instance;
