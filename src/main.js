/* Modules */
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router'
import './plugins/element.js'
import VueImg from 'v-img';

/* Components */
import Home from './components/Home'
import commonWords from './components/commonWords'
import FamilyRelations from './components/FamilyRelations'
import GreenlandicAnimals from './components/GreenlandicAnimals'
import About from './components/About'
import SignIn from './SignIn/SignIn'
import Register from './SignIn/Register'
import SignedIn from './SignIn/SignedIn'


Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueImg);

Vue.config.productionTip = false


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/commonwords',
      name: 'commonWords', component:
        commonWords
    }, {
      path: '/familyrelations',
      name: 'FamilyRelations',
      component: FamilyRelations
    }, {
      path: '/greenlandicanimals',
      name: 'GreenlandicAnimals',
      component: GreenlandicAnimals
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/signedin',
      name: 'SignedIn',
      component: SignedIn
    }
  ]
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')