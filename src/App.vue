<template>
  <div id="app" class="app md-app">
    <mainContent></mainContent>
  </div>
</template>

<script>
import store from './vuex'
import MainContent from './components/Root/MainContent'

export default {
  name: 'app',
  components: {
    MainContent
  },
  mounted () {
  },
  store
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons")
@import '/styles/colors'
@import '/styles/normalize'
@import '../node_modules/vue-material/dist/vue-material.min.css'

@font-face {
  font-weight: normal;
  font-style: normal;
  font-family: "Open Sans";
  src: url("./fonts/OpenSans-Regular.woff2") format("woff2"); }

@font-face {
  font-weight: normal;
  font-style: normal;
  font-family: "Open Sans Semibold";
  src: url("./fonts/OpenSans-Semibold.woff2") format("woff2"); }


.app
  max-width: 1920px;
  min-height: 100%
  margin: 0 auto
body
  min-height: 100%
  overflow-y: scroll
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #7c7c7c
  font-size: 16px
  background-repeat: no-repeat
  background-size: cover


a:hover
  text-decoration: none !important;

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s ease;
}
.modal-enter, .modal-leave-active {
  opacity: 0;
}
</style>
