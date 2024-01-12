<template>
    <div class="section">
        <div class="container">
            <div class="is-pulled-left is-flex is-clickable" @click="this.$router.go(-1)">
                <span class="icon is-small mt-1 mr-1">
                    <font-awesome-icon icon="fa-solid fa-arrow-left" />
                </span>
                <p class="is-underlined has-text-weight-bold is-clickable" @click="this.$router.go(-1)">Back</p>
            </div>
            <div class="certificates-content mt-6 pt-6">
                <div v-for="(item, index) in certificates" :key="index" :class="item.itemClass">
                    <p class="is-flex is-justify-content-center has-text-weight-bold">{{ item.name }}</p>
                    <div class="is-flex is-justify-content-center">
                        <img :src="getImageUrl(index)" alt="" class="is-clickable mt-5" style="width: 500px; height: 500px;"
                            @click="imageName = item.fileName">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <image-modal v-if="imageName != ''" @close="imageName = ''" :imageName="imageName" />
</template>

<script>
import ImageModal from '@/modals/ImageModal.vue';
export default {
    components: { ImageModal },
    data: () => ({
        imageName: "",
        certificates: [
            {
                name: "Dean Letter",
                fileName: "dean_letter.png",
                filePath: "@/assets/dean_letter.png",
                itemClass: "certificates-content-item1"
            },
            {
                name: "Master's Degree",
                fileName: "masters_degree.png",
                filePath: "@/assets/masters_degree.png",
                itemClass: "certificates-content-item2"
            },
            {
                name: "PixieBrix",
                fileName: "certificate_pixiebrix.png",
                filePath: "@/assets/certificate_pixiebrix.png",
                itemClass: "certificates-content-item3"
            },
            {
                name: "Jira",
                fileName: "certificate_jira.png",
                filePath: "@/assets/certificate_jira.png",
                itemClass: "certificates-content-item4"
            }
        ]
    }),
    created() {
        window.scrollTo(0, 0)
    },
    methods: {
        getImageUrl(index) {
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + this.certificates[index].fileName)
        },
    }
}
</script>

<style>
.certificates-content {
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 5rem;
}

.certificates-content-item1 {
    grid-row: 1;
    grid-column: 1 / 2;
}

.certificates-content-item2 {
    grid-row: 1;
    grid-column: 2 / 2;
}

.certificates-content-item3 {
    grid-row: 2;
    grid-column: 1 / 2;
}

.certificates-content-item4 {
    grid-row: 2;
    grid-column: 2 / 2;
}

.certificates-content-item5 {
    grid-row: 3;
    grid-column: 1 / 3;
}
</style>