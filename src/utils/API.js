import axios from "axios"

export default {
   
    getManyEmployees: function () {
        return axios.get(`https://randomuser.me/api/?results=20`)
    }
}