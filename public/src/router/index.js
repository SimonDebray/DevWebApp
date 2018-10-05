import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Vuetify from 'vuetify'
import Auth from '../firebase/auth/index'
import Providers from '../firebase/auth/providers'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/protected',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        const currentUser = Auth.currentUser
        if (!currentUser) {
          Auth.signInWithPopup(Providers.google).then(function (result) {
            console.log(result.user)
            next()
          }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.email
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential

            console.log({
              code: errorCode,
              msg: errorMessage,
              mail: email,
              credential: credential
            })
          })
        } else {
          next()
        }
      }
    }
  ]
})
