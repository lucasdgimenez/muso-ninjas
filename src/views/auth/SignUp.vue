<template>
    <form @submit.prevent="handleSubmit">
        <h1>Sign up</h1>
        <input type="text" placeholder="Display name" v-model="displayName"/>
        <input type="email" placeholder="E-mail" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{error}}</div>
        <button v-if="!isPending">Sign up</button>
        <button v-if="isPending" disabled>Loading</button>
    </form>
</template>

<script>
import useSignup from '@/composables/useLogin'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const { error, signup, isPending } = useSignup()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')

        const handleSubmit = async () => {
            const res = await signup(emai.value, password.value, displayName.value)
            if (!error.value) {
                console.log('use signup')
            }
        }

        return { email, password, displayName, isPending, error, handleSubmit }
    }
}
</script>

<style>

</style>