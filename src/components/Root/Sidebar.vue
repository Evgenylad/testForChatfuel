<template>
  <div class="sidebar">
    <md-toolbar class="md-transparent md-primary" md-elevation="0">
    </md-toolbar>
    <ul class="sidebar__list md-list md-theme-demo-light">
      <md-list-item class="sidebar__item sidebar__item--account"
                    @click="goToUsers($event)">
        <img class="sidebar__icon" src="../../img/account_circle.svg" alt="">
        <span class="sidebar__text md-list-item-text">Users</span>
      </md-list-item>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vueMethods from '../../mixins/methods'
import $ from 'jquery'

export default {
  name: 'sidebar',
  components: {
  },
  mixins: [vueMethods],
  data () {
    return {

    }
  },
  methods: {
    goToUsers (e) {
      let item = $(e.target).parent().parent().parent()
      console.log(item)
      let hasClass = item.hasClass('sidebar__item--current')
      let hasOtherClass = item.hasClass('sidebar__list')
      console.log('hasClass ', hasClass)
      console.log('hasOtherClass ', hasOtherClass)
      if (!hasClass && !hasOtherClass) {
        $('.sidebar__item').removeClass('sidebar__item--current')
        item.addClass('sidebar__item--current')
        this.$router.push({name: 'users'})
      }
    }
  },
  beforeCreate () {
  },
  mounted () {
    $('.sidebar__item--account').addClass('sidebar__item--current')
  },
  computed: mapState({
  })
}
</script>

<style scoped lang="stylus">
@import '../../styles/Root/sidebar'
</style>
