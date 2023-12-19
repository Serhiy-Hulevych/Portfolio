<template>
    <div class="section">
        <div class="container">
            <div class="profile-container">
                <div class="columns">
                    <div class="column">
                        <p class="main-title">Hi, my name is <span>{{ profile.name }}</span></p>
                        <p class="sub-title">{{ profile.title }}</p>
                        <p class="title-bio">{{ profile.bio }}</p>
                    </div>
                    <div class="column has-text-centered">
                        <img src="@/assets/profile-picture-nb.png" alt="Photo Unavailable" class="">
                    </div>
                    <!--
                        <div class="column">
                        <div class="box is-size-2">
                            <p>Hello, my name is <span class="has-text-weight-bold">{{ profile.name }}</span> and I've been
                                working
                                as a <span class="has-text-weight-bold">{{ profile.title }}</span> for the past <span
                                    class="has-text-weight-bold"> {{ profile.years }}</span> years</p>
                        </div>
                    </div>
                    -->
                </div>
            </div>
            <div class="skills-container columns has-text-centered">
                <div class="column">
                    <p class="skill-title">Languages/Frameworks</p>
                    <div class="programming-languages skill-box">
                        <img src="@/assets/python.png" alt="Python" class="image is-64x64 programming-item">
                        <img src="@/assets/javascript.png" alt="Javascript" class="image is-64x64 programming-item">
                        <img src="@/assets/net_core.png" alt=".Net Core" class="image is-64x64 programming-item">
                        <img src="@/assets/java.jpg" alt="Java" class="image is-64x64 programming-item">
                        <img src="@/assets/c_sharp.svg" alt="C#" class="image is-64x64 programming-item">
                        <img src="@/assets/mysql.png" alt="MySQL" class="image is-64x64 programming-item">
                    </div>
                </div>
                <div class="column">
                    <p class="skill-title">Work Experience</p>
                    <div class="box skill-box is-flex is-justify-content-center is-align-items-center">
                        <p class="is-size-1 has-text-weight-bold">2+ years</p>
                    </div>
                </div>
                <div class="column">
                    <p class="skill-title">Tools</p>
                    <div class="box skill-box"></div>
                </div>
            </div>
            <div class="education-profession mt-6">
                <div class="education-profession-item" @click="$router.push('/Education')">
                    <p class="education-profession-label">Education</p>
                    <img src="@/assets/education.svg" alt="Education Icon" class="image is-128x128">
                </div>
                <div class="education-profession-item" @click="$router.push('/Profession')">
                    <p class="education-profession-label">Work</p>
                    <img src="@/assets/profession.svg" alt="Profession Icon" class="image is-128x128">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        profile: {
            name: "Serhiy Hulevych",
            title: "Full Stack Developer",
            age: -1,
            years: 2,
            bio: "Transforming ideas into seamless code, I specialize in crafting efficient solutions for a tech-driven world."

        }
    }),
    created() {
        this.calculateAge(1998, 4, 18)
    },
    methods: {
        calculateAge(birthYear, birthMonth, birthDay) {
            const today = new Date();
            const birthdate = new Date(birthYear, birthMonth - 1, birthDay);

            let age = today.getFullYear() - birthdate.getFullYear();
            const monthDiff = today.getMonth() - birthdate.getMonth();

            // If the birth month hasn't occurred yet this year, or it's the same month but the day is in the future
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
                age--;
            }

            this.profile.age = age;
        }
    }
}
</script>

<style scoped>
.main-title {
    font-size: 75px;
    font-family: sans-serif;
}

.sub-title {
    font-size: 36px;
    font-family: sans-serif;
    font-weight: bold;
}

.title-bio {
    font-size: 20px;
}

.profile-picture {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
}

.programming-languages {
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 10px;
    row-gap: 10px;
    padding: 10px;
    justify-items: center;
    align-items: center;
}

.programming-item:hover {
    scale: 1.5;
}

.skill-box {
    min-height: 300px;
    background: #BBCEA8;
    border-radius: 25px;
}

.skill-title {
    font-size: 1.5rem;
    padding-bottom: 1rem;
}

.education-profession {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2rem;
}

.education-profession p {
    color: black;
    font-family: sans-serif;
    font-weight: bold;
}


.education-profession-item {
    display: grid;
    justify-content: center;
    align-content: center;
    background: #BBCEA8;
    border-radius: 25px;
    border: solid 1px black;
    min-height: 250px;
    cursor: pointer;
}

.education-profession-label {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 36px;
}

.education-profession-item:hover {
    scale: 1.2;
}
</style>