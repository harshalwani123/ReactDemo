import axios from 'axios';

//const USER_API_BASE_URL = 'http://localhost:8080/users';
const USER_API_BASE_URL = 'http://localhost:8080/ReactServletDBInt/MyServlet';

class ApiService {

    fetchUsers() {
        return axios.get('http://localhost:8080/ReactAppInt/GetAllUser');
    }

    fetchUserById(userId) {
        return axios.get('http://localhost:8080/ReactAppInt/EditUser?userId='+ userId);
    }

    /* deleteUser(userId) {
        return axios.delete('http://localhost:8080/ReactAppInt/DeleteSingleUser', userId);
    } */
    deleteUser(Id) {
        return axios.get('http://localhost:8080/ReactAppInt/DeleteSingleUser?userId='+ Id);
    }

    addUser(user) {
        return axios.post('http://localhost:8080/ReactAppInt/MyServlet',user);
    }

 /*    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
 */
editUser(user) {
    return axios.post('http://localhost:8080/ReactAppInt/UpdateUser',user);
}

}

export default new ApiService();