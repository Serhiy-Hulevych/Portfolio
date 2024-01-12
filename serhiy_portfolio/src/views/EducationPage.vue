<template>
    <div class="section mt-5">
        <div class="container mt-6">
            <p class="title is-size-1 is-flex is-justify-content-center has-text-weight-bold">Master's in {{
                education.degree }}</p>
            <div class="is-flex pt-3 is-clickable" @click="this.$router.go(-1)">
                <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-left" />
                <p class="is-underlined has-text-weight-bold is-pulled-left ml-2">Back</p>
            </div>
            <div class="mt-5">
                <p class="is-size-3 has-text-weight-bold">Thesis <span class="is-size-3"> - {{
                    education.university }}</span></p>
                <div class="is-flex mt-2">
                    <font-awesome-icon class="mt-1" icon="fa-solid fa-circle-arrow-right" />
                    <p class="ml-3">Non-supervised learning for documents clustering and classification</p>
                </div>
                <div class="is-flex mt-2">
                    <font-awesome-icon class="mt-1" icon="fa-solid fa-circle-arrow-right" />
                    <p class="ml-3">Text topics identifcation for any language</p>
                </div>
            </div>
            <div class="mt-6">
                <p class="is-size-3 has-text-weight-bold">Relevante Courses:</p>
                <div v-for="(item, index) in education.courses" :key="index" class="is-flex mt-4">
                    <font-awesome-icon class="mt-1" icon="fa-solid fa-circle-arrow-right" />
                    <p class="ml-3">{{ item }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        education: {
            university: "NOVA School of Science and Technology",
            degree: "Computer Science",
            start: 2016,
            end: 2021,
            courses: ["Machine Learning", "Cloud Development", "Algorithms and Data Structures", "Network and Computer Systems Security", "Computational Game Theory", "Object Oriented Programming"]
        }
    })
}
</script>

<style>
.title {
    color: #BBCEA8 !important
}
</style>