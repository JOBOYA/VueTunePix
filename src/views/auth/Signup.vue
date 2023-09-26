<template>
  <form @submit.prevent="handleSubmit">
    <h3>Inscription</h3>
    <input type="text"  placeholder="Nom d'utilisateur" v-model="displayName">
    <input type="text"  placeholder="Email" v-model="email">
    <input type="password"  placeholder="Mot de passe" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending" >Inscription</button>
    <button v-if="isPending" disabled>chargement</button>

 </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { error, signup, isPending } = useSignup();
        const router = useRouter()

        const email = ref('');
        const password = ref('');
        const displayName = ref('');

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value);
            if(!error.value) {
                router.push({ name: 'UserPlaylists' })
            }
        }


        return { email, password, displayName, handleSubmit, error, isPending }

        }

}
</script>

<style>

</style>