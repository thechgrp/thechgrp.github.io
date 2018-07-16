import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueScrollTo from 'vue-scrollto'

Vue.use( Router )

// // You can also pass in the default options
Vue.use( VueScrollTo, {
  offset: -80
} )

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
} )
