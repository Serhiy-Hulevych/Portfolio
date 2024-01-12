<template>
    <div class="modal is-active">
        <div class="modal-background" @click="disableModal"></div>
        <img id="imageId" :src="getImageUrl()" alt="" class="modal-content">
    </div>
</template>

<script>
export default {
    props: {
        imageName: String
    },
    emits: ["close"],
    data: () => ({
        teste: "@/assets/python.png"
    }),
    methods: {
        getImageUrl() {
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + this.imageName)
        },
        disableModal() {
            this.$emit("close");
        },
    }
}
</script>

<style></style>