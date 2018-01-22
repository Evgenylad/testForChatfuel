import axios from 'axios'
import { API_URL } from '../../config/constants'
/* import $ from 'jquery' */
export default {
  // receiving users
  getUsers () {
    return new Promise((resolve, reject) => {
      let url = API_URL + 'users'
      axios.get(url)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },

  // receiving nextUsers
  getNextUsers (nextPageUrl, context) {
    console.log(nextPageUrl)
    return new Promise((resolve, reject) => {
      let url = API_URL + 'users/' + nextPageUrl
      axios.get(url)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },

  // receiving nextUsers
  getPreviousUsers (previousPageUrl, context) {
    return new Promise((resolve, reject) => {
      let url = API_URL + 'users/' + previousPageUrl
      axios.get(url)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}
