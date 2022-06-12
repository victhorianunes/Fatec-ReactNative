import axios from 'axios';

 
const api = axios.create({

  baseURL: 'https://tarefa-backend.herokuapp.com/tasks'
});
 
export default api;