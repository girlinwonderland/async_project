import axios from 'axios';

const URL = 'https://www.boredapi.com/api/activity';

export const fetchActivity = () => axios.get(URL);
