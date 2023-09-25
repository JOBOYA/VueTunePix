<!-- Dans Accueil.vue -->
<template>
  <div class="home">
    <div v-if="error" class="error">Impossible de récupérer les données</div>
    <ListView :playlists="documents" v-if="documents" />
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import ListView from '../components/ListView.vue'
export default {
  name: 'Accueil',
  components: {
    ListView
  },
  setup() {
    const { error, documents } = getCollection('playlists')
    return { error, documents }
  }
}
</script>

