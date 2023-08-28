import axios from 'axios';

const URL = 'https://official-joke-api.appspot.com/random_joke';

export const fetchJokes = () => axios.get(URL);
