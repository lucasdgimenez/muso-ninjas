<template>
    <form action="">
        <h4>Create new playlist</h4>
        <input type="text" required placeholder="Playlist title" v-model="title">
        <textarea required placeholder="Playlist desc" v-model="description"></textarea>
        <label>Upload playlist cover image</label>
        <input type="file" @change="handleChange"/>
        <div class="error">{{ fileError }}</div>

        <div class="error"></div>
        <button>Create</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const handleSubmit = () => {
            if(file.value) {
                console.log(title.value, description.value, file.value)
            }
            
        }

        const types = ['image/png', 'image/jpeg']

        const handleChange = (e) => {
            const selected = e.targte.files[0]

            if(selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'Please select an image file (png or jpg)'
            }
        }

        return {title, description, handleSubmit, fileError}
    }
}
</script>

<style scoped>
form {
    background: white;
}

input[type="file"] {
    border: 0;
    padding: 0;
}

label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
}

button {
    margin-top: 20px;
}

</style>