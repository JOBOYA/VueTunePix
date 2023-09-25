import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'Login',
    component:  Login
  },
  {
    path: '/inscription',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/playlists/creer',
    name: 'CreatePlaylist',
    component: CreatePlaylist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
