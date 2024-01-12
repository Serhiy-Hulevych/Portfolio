<template>
    <div class="section mt-5">
        <div class="container mt-6">
            <p class="title is-size-1 is-flex is-justify-content-center has-text-weight-bold">Professional Experience</p>
            <div class="is-flex pt-3 is-clickable" @click="this.$router.go(-1)">
                <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-left" />
                <p class="is-underlined has-text-weight-bold is-pulled-left ml-2">Back</p>
            </div>
            <div class="mt-5">
                <p class="is-size-3 has-text-weight-bold">{{ experience.jobTitle }} - {{
                    experience.company }}</p>
                <p>{{ experience.date }}</p>

                <div class="mt-5">
                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Implemented <span class="important">Azure Cloud Services</span>, including Web Apps,
                            for scalable and reliable
                            application
                            infrastructure.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2"><span class="important">Led</span> a team in automating a manual process, improving
                            efficience, and reducing
                            errors.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Developed <span class="important">RESTful APIs</span> for backend services, as well
                            as frontend components for
                            seamless user
                            experiences.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Implemented <span class="important">Azure DevOps</span> for creating and managing
                            CI/CD pipelines.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Utilized <span class="important">JWT Tokens</span> for API and webpage
                            authorization/authentication.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2"><span class="important">Planned</span> and <span
                                class="important">distributed</span> tasks for timely project delivery.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Collaborated with different teams to manage project dependencies and achieve project
                            goals within
                            deadlines.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2"><span class="important">Designed</span> and implemented a solution to migrate non
                            Azure applications to Azure AD
                            authentication
                            using <span class="important">OpenID</span> and <span class="important">SAML</span> protocols.
                        </p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Automated End-to-End testing using <span class="important">Cypress</span> for high
                            code quality.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Created and authentication design for chrome extensions, addressing clean desk
                            policy scenarios and
                            2FA restrictions.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Took responsibility for deploying to <span class="important">DEV</span>, <span
                                class="important">UAT</span> and <span class="important">PROD</span> environments, ensuring
                            smooth
                            transitions, and
                            provided comprehensive documentation.</p>
                    </class>

                    <class class="is-flex mt-5">
                        <font-awesome-icon class=" mt-1" icon="fa-solid fa-arrow-right" />
                        <p class="ml-2">Methodology: <span class="important">Agile Scrum</span>.</p>
                    </class>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        experience: {
            jobTitle: "Full Stack Developer",
            company: "Teleperformance Portugal",
            date: "February 2022 - Present"
        }
    })
}
</script>

<style>
.title {
    color: #BBCEA8 !important
}

.important {
    font-weight: bold;
    color: #BBCEA8 !important;
}
</style>