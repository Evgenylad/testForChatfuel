<template>
  <main class="userDetails">
    <h1 class="userDetails__title">{{this.name}}</h1>
    <form class="userDetails__form">
      <div class="userDetails__avatarBlock" action="index.html" method="post">
        <div class="userDetails__avatarWrapper">
          <avatar class="userDetails__avatar" :username="this.name" :src="this.avatarUrl">
          </avatar>
          <a class="userDetails__link userDetails__link--hidden" href="#"
             @click="changeAvatar($event)">Click here</a>
        </div>
        <input class="userDetails__name userDetails__name--disabled" type="text" name="name" disabled
               v-model="name">
      </div>
      <div class="userDetails__btnBlock">
        <md-button class="md-primary" type="button" name="button"
                   @click="changeNameAndAvatar($event)">Редактировать</md-button>
        <md-button class="md-accent" type="button" name="button"
                   @click="sendForm()">Сохранить</md-button>
      </div>
    </form>
    <div class="userDetails__modal userDetails__modal--hidden">
      <label class="userDetails__label" for="">Input new url for your avatar</label>
      <input class="userDetails__changeUrl" type="text" id="avatarUrl"
             v-model="avatarUrl">
       <div class="userDetails__btnBlock">
         <md-button class="md-primary" type="button" name="button"
                    @click="cancelAndCloseModal($event)">Отменить</md-button>
         <md-button class="md-accent" type="button" name="button"
                    @click="saveAndCloseModal($event)">Сохранить</md-button>
       </div>
    </div>
  </main>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import { API_URL } from '../../../config/constants'
import vueMethods from '../../mixins/methods'
import Avatar from 'vue-avatar'
import { mapState } from 'vuex'
export default {
  name: 'userDetails',
  components: {
    Avatar
  },
  mixins: [vueMethods],
  data () {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      avatarUrl: this.$route.params.avatarUrl
    }
  },
  methods: {
    changeNameAndAvatar () {
      $('.userDetails__name--disabled').prop('disabled', false)
      $('.userDetails__link').removeClass('userDetails__link--hidden')
      $('.userDetails__name').removeClass('userDetails__name--disabled')
    },
    changeAvatar () {
      $('.userDetails__modal').removeClass('userDetails__modal--hidden')
    },
    cancelAndCloseModal (e) {
      $('.userDetails__modal').addClass('userDetails__modal--hidden')
      this.avatarUrl = this.$route.params.avatarUrl
      console.log(this.avatarUrl)
    },
    saveAndCloseModal (e) {
      $('.userDetails__modal').addClass('userDetails__modal--hidden')
    },
    sendForm () {
      $('.userDetails__name').addClass('userDetails__name--disabled')
      $('.userDetails__name--disabled').prop('disabled', true)
      $('.userDetails__link').addClass('userDetails__link--hidden')

      let url = API_URL + 'users/' + this.id
      console.log(url)
      return new Promise((resolve, reject) => {
        axios.post(url, {
          firstName: this.name,
          lastName: this.avatarUrl
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      })
    }
  },
  computed: mapState({
    users: state => state.users.user
  })
}
</script>

<style scoped lang="stylus">
@import '../../styles/Root/userDetails'
</style>
