<template>
  <div class="user-playlists">
    <h1>Mes Playlists</h1>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'CreatePlaylist' }" class="btn no-underline" >Créer une nouvelle playlist</router-link>
  </div>
</template>

<script>
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView.vue'

export default {
  components: {ListView },
  setup() {
    const { user } = getUser()
    const { documents: playlists } = getCollection(
      'playlists',
       [ 'userId', '==', user.value.uid ]
      )

      console.log(playlists)
    return { playlists }
  }
  
}
</script>

<style scoped>

.no-underline {
  text-decoration: none;
}

</style>