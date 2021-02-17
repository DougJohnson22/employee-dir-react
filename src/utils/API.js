import axios from "axios"

export default {
    getOneEmployee: function () {
        return axios.get("https://randomuser.me/api/")
    },
    getManyEmployees: function (integer) {
        return axios.get(`https://randomuser.me/api/?results=${integer}`)
    },
    sortByGender: function (gender) {
        return axios.get(`https://randomuser.me/api/?gender=${gender}`)
    },
    sortByNationality: function (nat) {
        return axios.get(`https://randomuser.me/api/?nat=${nat}`)
    }
}