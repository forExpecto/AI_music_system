<template>
    <div>
        <AudioPlayer :option="{ src: musicsrc, title: musicname, coverImage: musicimage, }" />
    </div>
</template>

<script>
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

export default {
    data() {
        return {
            musicsrc: '',
            musicname: '',
            musicimage: '',
        }
    },
    components: {
        AudioPlayer
    }
}

</script>

<style scoped></style>