<template>
    <div class="section">
        <div class="container">
            <p class="title">Background</p>
            <p>Master's in {{ education.degree }}</p>
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
            end: 2021
        }
    })
}
</script>

<style></style>