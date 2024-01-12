<template>
    <div class="section">
        <div class="container">
            <div class="profile-container">
                <div class="columns">
                    <div class="column">
                        <p class="main-title">Hi, my name is <span>{{ profile.name }}</span></p>
                        <div class="is-flex is-align-items-center">
                            <p class="sub-title">{{ profile.title }}</p>
                            <img src="@/assets/linkedin.png" alt="LinkedIn"
                                class="image is-24x24 is-clickable ml-3 social-icon" @click="openLinkedIn()">
                            <img src="@/assets/github.png" alt="Github" class="image is-24x24 is-clickable ml-3 social-icon"
                                style="width: auto; background-color: white;" @click="openGithub()">
                        </div>
                        <p class="title-bio">{{ profile.bio }}</p>
                        <div class="is-flex mt-3">
                            <button class="button has-text-weight-bold contact-info" @click="contact()"
                                style="background-color: #BBCEA8;">Contact
                                Me</button>
                            <button class="button has-text-weight-bold ml-3 contact-info" @click="downloadCV()"
                                style="background-color: #BBCEA8;"><span>CV</span>
                                <span class="icon is-small">
                                    <font-awesome-icon icon="fa-solid fa-download" />
                                </span></button>
                        </div>
                    </div>
                    <div class="column has-text-centered is-flex">
                        <img src="@/assets/profile-picture-nb.png" alt="Photo Unavailable" class="ml-6">
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
            <div class="skills-container columns has-text-centered mt-3">
                <div class="column">
                    <div class="skill-box">
                        <p class="skill-title skill-box-label pt-3">Languages/Frameworks</p>
                        <div class="programming-languages">
                            <img src="@/assets/c_sharp.svg" alt="C#" class="image is-64x64">
                            <img src="@/assets/net_core.png" alt=".Net Core" class="image is-64x64">
                            <img src="@/assets/javascript.png" alt="Javascript" class="image is-64x64">
                            <img src="@/assets/vue.png" alt="Vuejs" class="image is-64x64">
                            <img src="@/assets/java.jpg" alt="Java" class="image is-64x64">
                            <img src="@/assets/python.png" alt="Python" class="image is-64x64">
                            <img src="@/assets/mysql.png" alt="MySQL" class="image is-64x64">
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="skill-box">
                        <p class="skill-title skill-box-label pt-3">Work Experience</p>
                        <p class="is-size-1 has-text-weight-bold has-text-black mt-6">2 years</p>
                    </div>
                </div>
                <div class="column">
                    <div class="skill-box">
                        <p class="skill-title skill-box-label pt-3">Tools</p>
                        <div class="tools">
                            <img src="@/assets/bitbucket2.png" alt="bitbucket" class="image is-64x64"
                                style="max-width:100px !important">
                            <img src="@/assets/git.png" alt="git" class="image is-64x64"
                                style="max-width: 70px !important;">
                            <img src="@/assets/studio.png" alt="studio" class="image is-64x64"
                                style="height: 35px !important;">
                            <img src="@/assets/sourcetree.png" alt="sourcetree" class="image is-64x64">
                            <img src="@/assets/jira.png" alt="jira" class="image is-64x64"
                                style="max-width: 70px !important;">
                            <img src="@/assets/studio_code.png" alt="studio code" class="image is-64x64"
                                style="height: 35px !important;">
                            <img src="@/assets/confluence.png" alt="confluence" class="image is-64x64">

                            <img src="@/assets/owasp.png" alt="owasp" class="image is-64x64"
                                style="max-width: 70px !important;">
                            <img src="@/assets/azure.png" alt="azure" class="image is-64x64"
                                style="height: 35px !important;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="education-profession mt-6">
                <div class="education-profession-item item1 reveal" @click="$router.push('/Education')">
                    <p class="education-profession-label">Education</p>
                    <img src="@/assets/education.svg" alt="Education Icon" class="image is-128x128">
                </div>
                <div class="education-profession-item item2 reveal" @click="$router.push('/Profession')">
                    <p class="education-profession-label">Work</p>
                    <img src="@/assets/profession.svg" alt="Profession Icon" class="image is-128x128">
                </div>
                <div class="education-profession-item item3 reveal" @click="$router.push('/Certificates')">
                    <p class="education-profession-label">Certificates</p>
                    <img src="@/assets/profession.svg" alt="Certificates Icon" class="image is-128x128">
                </div>
            </div>
        </div>
    </div>
    <contact-modal v-if="wantContact" @close="closeContactModal()" />
</template>

<script>
import ContactModal from "@/modals/ContactModal.vue"
export default {
    components: { ContactModal },
    data: () => ({
        profile: {
            name: "Serhiy Hulevych",
            title: "Full Stack Developer",
            age: -1,
            years: 2,
            bio: "Transforming ideas into seamless code, I specialize in crafting efficient solutions for a tech-driven world."
        },
        wantContact: false
    }),
    created() {
        this.reveal()
        this.calculateAge(1998, 4, 18)
        document.querySelector("#app").addEventListener("scroll", this.reveal);
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
        },
        reveal() {
            let reveals = document.querySelectorAll(".reveal");
            for (const element of reveals) {
                let windowHeight = window.innerHeight;
                let elementTop = element.getBoundingClientRect().top;
                let elementVisible = 1;
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add("active");
                } else {
                    element.classList.remove("active");
                }
            }
        },
        contact() {
            this.wantContact = true
        },
        closeContactModal() {
            this.wantContact = false
        },
        openLinkedIn() {
            window.open("https://www.linkedin.com/in/serhiy-hulevych-847018172/")
        },
        openGithub() {
            window.open("https://github.com/Serhiy-Hulevych?tab=repositories")
        },
        downloadCV() {
            import('@/assets/CV-Serhiy_Hulevych.pdf').then((pdfModule) => {
                // Get the actual path from the imported module
                const pdfPath = pdfModule.default;

                // Create a link element
                const link = document.createElement('a');

                // Set the download attribute and file URL
                link.download = 'CV-serhiy-hulevych.pdf';
                link.href = pdfPath;

                // Append the link to the document
                document.body.appendChild(link);

                // Trigger a click on the link to start the download
                link.click();

                // Remove the link from the document
                document.body.removeChild(link);
            })
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
    color: #BBCEA8;
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
    grid-template-columns: auto auto auto;
    column-gap: 10px;
    row-gap: 35px;
    padding: 10px;
    justify-items: center;
    align-items: center;
}

.tools {
    border-radius: 10px;
    display: grid !important;
    grid-template-columns: auto auto auto;
    column-gap: 10px;
    row-gap: 20px;
    padding: 10px;
    justify-items: center;
    align-items: center;
}

.is-64x64 {
    width: auto !important;
    max-width: 100px !important;
    height: auto !important;
    max-height: 50px !important;
}

.programming-item:hover {
    scale: 1.5;
}

.skill-box {
    min-height: 300px;
    background: #BBCEA8;
    border-radius: 25px;
}

.skill-box-label {
    color: black;
    font-weight: bold;
}

.skill-title {
    font-size: 1.5rem;
    padding-bottom: 1rem;
}

.education-profession {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2rem;
    row-gap: 1rem;
}

.education-profession p {
    color: black;
    font-family: sans-serif;
    font-weight: bold;
}


.education-profession-item {
    display: grid;
    justify-content: center;
    justify-items: center;
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

.item1 {
    grid-row: 1;
}

.item2 {
    grid-row: 1;
}

.item3 {
    grid-row: 2;
    grid-column: 1 / 3;
}

.item3:hover {
    scale: 1.1
}

.education-profession-item:hover {
    scale: 1.1;
}

.reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: 1s all ease;
}

.reveal.active {
    transform: translateY(0);
    opacity: 1;
}

.social-icon:hover {
    scale: 1.2;
}

.contact-info:hover {
    scale: 1.1
}
</style>