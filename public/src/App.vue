<template>
  <div id="app">
    <v-app>
      <app-header/>
      <router-view/>
      <app-footer/>
    </v-app>
  </div>
</template>

<script>
import VApp from 'vuetify/es5/components/VApp/VApp'
import AppHeader from './components/nav/Header'
import AppFooter from './components/nav/Footer'
export default {
  name: 'App',
  components: {AppFooter, AppHeader, VApp}
}
</script>
