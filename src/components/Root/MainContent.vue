<template>
  <router-view></router-view>
</template>

<script>
import $ from 'jquery'
import vueMethods from '../../mixins/methods'
import { mapState } from 'vuex'
export default {
  name: 'mainContent',
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
      let hasClass = $(target).hasClass('mainContent__prevPage')
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
  beforeCreate () {
    this.$router.push({name: 'users'})
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
@import '../../styles/Root/mainContent'
</style>
