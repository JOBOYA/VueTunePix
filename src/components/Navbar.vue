<template>
  <div class="navbar">
    <nav>
      <img src="../assets/dev.jpeg">
        <h1 class="no-underline"><router-link class="no-underline" :to="{name: 'Accueil'}">Jojo Tune</router-link></h1>
        <div class="links">
          <div v-if="user">
            <router-link :to="{ name: 'CreatePlaylist'}" class="no-underline">Créer Playlist</router-link>
            <router-link :to="{ name: 'UserPlaylists'}" class="no-underline">Mes Playlists</router-link>
            <span>Salut, {{ user.displayName }}</span>
            <button @click="handleClick">déconnexion</button>
          </div>

        <div v-else>
          <router-link class="btn no-underline" :to="{name: 'Signup'}">Inscription</router-link>
          <router-link class="btn no-underline" :to="{name: 'Login'}">Connexion</router-link>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import  {useRouter } from 'vue-router'

export default {
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      console.log('déconnexion')
      router.push({ name: 'Login' })
    }

    return { handleClick, user }
  }

}
</script>

<style scoped>
.no-underline {
text-decoration: none;
}

.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a , button {
  margin-left: 16px;
  font-size: 14px;
}

nav img {
width: 5%;
max-height: 5%;
border-radius: 50%;
}

span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}
</style>