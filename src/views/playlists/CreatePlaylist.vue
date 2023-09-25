<template>
  <form @submit.prevent="handleSubmt">
    <h4>Créer nouvelle Playlist</h4>
    <input type="text" placeholder="Titre de la playlist" v-model="title">
    <textarea placeholder="Description de la playlist..." v-model="description" required></textarea>
    <!--upload playlist image-->
    <label>télécharger l'image de couverture de la playlist</label>
    <input type="file" @change="handleChange">
    <div class="error">{{ fileError }}</div>
    <div class="error"></div>
    <button>Créer</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const handleSubmt = () => {
            if(file.value) {
            console.log(title.value, description.value, file.value)
            }
        }

        //allowed file types
        const types = ['image/png', 'image/jpeg']

            const handleChange = (e) => {
            const selected = e.target.files[0]
            console.log(selected)

            if (selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'Veuillez sélectionner un fichier image (png or jpeg)'
            }
        }

        return {title, description, handleSubmt , handleChange, fileError}
    }
}
</script>

<style>


input[type="file"] {
    border: 0;
    padding: 0;
}

label {
 font-size: 12px;
 display: block;
 margin-top: 30px;
}

button{
    margin-top: 20px;

}





</style>