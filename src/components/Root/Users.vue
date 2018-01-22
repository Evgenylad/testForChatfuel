<template>
  <main class="users">
    <h1 class="users__title">User's list</h1>

    <ul class="users__list">
      <md-list-item class="users__listItem"
                    v-for="(user, index) in users"
                    v-if="index < usersTo && usersFrom <= index"
                    @click="loadUserDetails($event, user.id, user.name, user.avatarUrl)">
        <img class="users__icon" :src="user.avatarUrl" alt="">
        <span class="users__text md-list-item-text">{{user.name}}</span>
      </md-list-item>
    </ul>

    <ul class="users__pagination">
      <md-list-item class="users__paginationItem">
        <md-button class="users__btn users__prevPage md-raised md-mini"
                   @click="loadUsers($event, previousPageUrl)">
          PREVIOUS
        </md-button>
      </md-list-item>
      <md-list-item class="users__paginationItem" v-for="page in pages">
        <md-button class="users__btn md-raised md-mini"
                   @click="switchBeetwinLoadedData($event, page)">
          {{page}}
        </md-button>
      </md-list-item>
      <md-list-item class="users__paginationItem">
        <md-button class="users__btn users__nextPage md-raised md-mini"
                   @click="loadUsers($event, nextPageUrl)">
          NEXT
        </md-button>
      </md-list-item>
    </ul>
  </main>
</template>

<script>
import $ from 'jquery'
import vueMethods from '../../mixins/methods'
import { mapState } from 'vuex'
export default {
  name: 'users',
  components: {
  },
  mixins: [vueMethods],
  data () {
    return {
      amountOfUsersForOnePage: 21,
      usersFrom: 0,
      usersTo: 21,
      pages: ''
    }
  },
  methods: {
    loadUsers (e, url) {
      let target = e.target.parentElement.parentElement
      let hasClass = $(target).hasClass('users__prevPage')
      console.log(url)
      if (hasClass && url !== undefined) {
        this.$store.dispatch('getPreviousUsers', url)
      } else if (!hasClass && url !== undefined) {
        this.$store.dispatch('getNextUsers', url)
      } else {
        target.disabled = true
      }
    },
    switchBeetwinLoadedData (e, pageNumber) {
      console.log(pageNumber)
      this.usersFrom = this.amountOfUsersForOnePage * pageNumber
      this.usersTo = this.amountOfUsersForOnePage * pageNumber + this.amountOfUsersForOnePage
      console.log(this.usersFrom)
      console.log(this.usersTo)
    },
    loadUserDetails (e, id, name, avatarUrl) {
      console.log(id)
      this.$router.push({name: 'userDetails', params: {id: id, name: name, avatarUrl: avatarUrl}})
    }
  },
  computed: mapState({
    users: state => state.users.users,
    previousPageUrl: state => state.users.previousPageUrl,
    nextPageUrl: state => state.users.nextPageUrl
  }),
  mounted () {
    let amountOfPages = this.users.length / this.amountOfUsersForOnePage
    this.pages = Array(amountOfPages).fill(null).map((u, i) => i)
    console.log(this.users)
    console.log(this.pages)
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Root/users'
</style>
