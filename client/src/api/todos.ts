import axios from 'axios';

const API_URL = `http://localhost:3000/api`;

export async function getTodos() {

   const res = await axios.get(`${API_URL}/todos`);

   return res.data;

}