import axios from 'axios';

const URL = 'https://catfact.ninja/fact';

export const fetchCatFacts = () => axios.get(URL);
