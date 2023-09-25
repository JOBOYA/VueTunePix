<template>
 <form @submit.prevent="handleSubmit">
    <h3>Connexion</h3>
    <input type="text"  placeholder="Email" v-model="email">
    <input type="password"  placeholder="Mot de passe" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending" >connexion</button>
    <button v-if="isPending" disabled>chargement</button>

 </form>
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'

export default {
    setup() {
        const  { error, login, isPending } = useLogin()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if(!error.value) {
                console.log('user is logged in')
            }
        }

        return { email, password, handleSubmit, error, isPending }
    }

}
</script>

<style>

</style>