








































import axios from 'axios';

const LOCAL_URL = "http://localhost:8000/";
const PROD_URL = "http://http://52.230.1.251:81/";

let API_URL = "";
const env = "local";

if(env === 'local') API_URL = LOCAL_URL;
else API_URL = PROD_URL;

class ApiService {
  fetchUsers() {
    return axios.get(API_URL + "partners/all");    
  }

  fetchUserById(userId) {
    return axios.get(API_URL + 'partners/get/' + userId);
  }

  deleteUser(userId) {
      return axios.delete(API_URL + 'partners/delete/' + userId);
  }

  addUser(user) {
      return axios.post(API_URL + 'partners', user);
  }

  editUser(user) {
      return axios.put(API_URL + 'partners/' + user.id, user);
  }
  
  paginateUsers(pageNumber) {
    return axios.get(API_URL + "partners/all?page=" + pageNumber);
  }
}

export default new ApiService();

