<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Ajouter un Son</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Ajouter un Nouveau Son</h4>
      <input type="text" placeholder="Titre" required v-model="title">
      <input type="text" placeholder="Artiste" required v-model="artist">
      <button>Ajouter</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import useDocument from '@/composables/useDocument';

export default {
  props: ['playlist'], 
  setup(props) {
    
    const title = ref('');
    const artist = ref('');
    const showForm = ref(false);
    const { updateDoc } = useDocument('playlists', props.playlist.id);


    const handleSubmit = async () => {
     const newSong = {
       title: title.value,
       artist: artist.value,
       id: Math.floor(Math.random() * 1000000),
     }
     await updateDoc({
       songs: [...props.playlist.songs, newSong]
     })
      title.value = '';
      artist.value = '';
    }

    return { title, artist, showForm, handleSubmit }
  }

}
</script>

<style scoped>

.add-song {
  text-align: center;
  margin-top: 40px;
}

form {
  max-width: 100%;
  text-align:  left;
}

</style> 