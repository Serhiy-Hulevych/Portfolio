<template>
    <div class="modal is-active">
        <div class="modal-background" @click="disableModal"></div>
        <div class="modal-content contact-content">
            <font-awesome-icon class="mr-4 mt-4 is-clickable is-pulled-right has-text-black" icon="fa-solid fa-x"
                @click="disableModal" />
            <div v-if="!requestSent">
                <div class="section">
                    <div class="container">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control has-icons-right">
                                <input v-model="message.fromName" class="input" type="text" placeholder="Your name"
                                    style="background: whitesmoke;">
                                <span class="icon is-small is-right">
                                    <font-awesome-icon v-if="message.fromName == ''" icon="fa-solid fa-asterisk"
                                        style="color: red !important; width: 10px;" />
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="message.fromEmail" class="input" type="email"
                                    placeholder="example@gmail.com" style="background: whitesmoke;">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon icon="fa-solid fa-envelope" />
                                </span>
                                <span class="icon is-small is-right">
                                    <font-awesome-icon v-if="message.fromEmail == '' || !message.fromEmail.includes('@')"
                                        icon="fa-solid fa-asterisk" style="color: red !important; width: 10px;" />
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control has-icons-right">
                                <textarea v-model="message.message" class="textarea has-fixed-size" rows="9"
                                    placeholder="Type in your message.." style="background: whitesmoke;"></textarea>
                                <span class="icon is-small is-right">
                                    <font-awesome-icon v-if="message.message == ''" icon="fa-solid fa-asterisk"
                                        style="color: red !important; width: 10px;" />
                                </span>
                            </div>
                        </div>
                        <button id="submitId" class="button is-pulled-right" @click="sendMessage()">Submit</button>
                    </div>
                </div>
            </div>
            <div v-else class="is-flex is-justify-content-center is-align-items-center" style="height: 100%; color: green;">
                <span class="icon is-range is-left">
                    <font-awesome-icon icon="fa-solid fa-check" style="height: 5rem;" />
                </span>
                <p class="ml-6 is-size-3 has-text-weight-bold">Message Sent!</p>
            </div>
        </div>
    </div>
</template>

<script>
import emailsjs from "@emailjs/browser"
export default {
    emits: ["close"],
    data: () => ({
        message: {
            fromName: "",
            fromEmail: "",
            message: ""
        },
        requestSent: false
    }),
    methods: {
        disableModal() {
            this.$emit("close");
        },
        sendMessage() {
            var temp = this
            if (this.checkFields()) {
                document.getElementById("submitId").classList.add("is-loading")
                emailsjs.send("service_kq2dp0r", "template_vv5m43l", {
                    from_name: this.message.fromName,
                    message: this.message.message,
                    reply_to: this.message.fromEmail,
                    to_name: this.message.fromName //used for auto-reply
                }, "VkFmkebMT8BlTOFl_").then(function () {
                    temp.requestSent = true
                    document.getElementById("submitId").classList.remove("is-loading")
                }, function () {
                    document.getElementById("submitId").classList.remove("is-loading")
                });
            }
        },
        checkFields() {
            return (this.message.fromName != "" && this.message.fromEmail != "" && this.message.message !== "" && this.message.fromEmail.includes("@"))
        }
    }
}
</script>

<style>
.contact-content {
    background: #BBCEA8;
    border-radius: 10px;
    width: 50%;
    height: 60%;
}
</style>