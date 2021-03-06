import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Articles from '@/components/Articles'
import VueCarousel from 'vue-carousel';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueCarousel);
Vue.use(Router)



export default new Router({
  routes: [
    
      { 
  path: '/home', 
  name: 'Home', 
  component: Home 
},
{
	path: '/about', 
  name: 'About', 
  component: About 
},
{
  path: '/articles', 
  name: 'Articles', 
  component: Articles 
},
{
  path: '/contact', 
  name: 'Contact', 
  component: Contact 
}    
  ]

})
