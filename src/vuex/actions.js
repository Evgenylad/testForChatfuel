import * as types from './mutation-types'
import users from '../api/users'

export const getUsers = ({ commit }) => {
  users.getUsers()
    .then((users) => {
      console.log(users)
      commit(types.GET_USERS, users)
    })
    .catch((err) => {
      console.error('Error receiving recomended: ', err)
    })
}

export const getPreviousUsers = ({commit}, url) => {
  users.getPreviousUsers(url)
    .then((users) => {
      console.log(users)
      commit(types.GET_PREVIOUS_USERS, users)
    })
    .catch((err) => {
      console.error('Error receiving recomended: ', err)
    })
}

export const getNextUsers = ({commit}, url) => {
  users.getNextUsers(url)
    .then((users) => {
      console.log(users)
      commit(types.GET_NEXT_USERS, users)
    })
    .catch((err) => {
      console.error('Error receiving recomended: ', err)
    })
}
