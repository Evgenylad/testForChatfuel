import * as types from '../mutation-types'

const state = {
  users: [
    {
      id: '1',
      name: 'User1',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '2',
      name: 'User2',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '3',
      name: 'User3',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '4',
      name: 'User4',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '5',
      name: 'User5',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '6',
      name: 'User6',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '7',
      name: 'User7',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '8',
      name: 'User8',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '9',
      name: 'User9',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '10',
      name: 'User10',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '11',
      name: 'User11',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '12',
      name: 'User12',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '13',
      name: 'User13',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '14',
      name: 'User14',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '15',
      name: 'User15',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '16',
      name: 'User16',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '17',
      name: 'User17',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '18',
      name: 'User18',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '19',
      name: 'User19',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '20',
      name: 'User20',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '21',
      name: 'User21',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '22',
      name: 'User22',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '23',
      name: 'User23',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '24',
      name: 'User24',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '25',
      name: 'User25',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '26',
      name: 'User26',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '27',
      name: 'User27',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '28',
      name: 'User28',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '29',
      name: 'User29',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '30',
      name: 'User30',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '31',
      name: 'User31',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '32',
      name: 'User32',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '33',
      name: 'User33',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '34',
      name: 'User34',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '35',
      name: 'User35',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '36',
      name: 'User36',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '37',
      name: 'User37',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '38',
      name: 'User38',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '39',
      name: 'User39',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '40',
      name: 'User40',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '41',
      name: 'User41',
      avatarUrl: require('../../img/icon.png')
    },
    {
      id: '42',
      name: 'User42',
      avatarUrl: require('../../img/icon.png')
    }
  ],
  nextPageUrl: 'nextPageUrl',
  previousPageUrl: 'previousPageUrl'
}

const mutations = {
  [types.GET_USERS] (state, users) {
    state.users = users.result
    state.nextPageUrl = users.nextPageUrl
    state.previousPageUrl = users.previousPageUrl
    console.log('users - ', users)
  },

  [types.GET_NEXT_USERS] (state, users) {
    state.users = users.result
    state.nextPageUrl = users.nextPageUrl
    state.previousPageUrl = users.previousPageUrl
    console.log('users - ', users)
  },

  [types.GET_PREVIOUS_USERS] (state, users) {
    state.users = users.result
    state.nextPageUrl = users.nextPageUrl
    state.previousPageUrl = users.previousPageUrl
    console.log('users - ', users)
  }
}

export default {
  state, mutations
}
