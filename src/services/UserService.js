import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService{

    createUser(user){
        return axios.post(USER_API_BASE_URL+"/register", user);
    }

    getUser(){
        return axios.get(USER_API_BASE_URL);
    }

    deleteUser(id){
        return axios.delete(USER_API_BASE_URL+"/"+id);
    }

    getUserById(id){
        return axios.get(USER_API_BASE_URL+"/"+id);
    }

    updateUser(user, id){
        return axios.put(USER_API_BASE_URL+"/"+id,user);
    }

    userLogin(user){
        return axios.post(USER_API_BASE_URL+"/login",user);
    }
}

export default new UserService();