<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
    <div class="glass-card relative w-full max-w-xl p-8">
      <button
        class="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-primary/50 hover:bg-primary/10 hover:text-white"
        @click="disableModal"
      >
        <Icon icon="mdi:close" class="h-5 w-5" />
      </button>

      <div v-if="!requestSent" class="space-y-6">
        <div class="space-y-2">
          <span class="section-title">Contact</span>
          <h2 class="text-2xl font-semibold text-white">Let's build something together</h2>
          <p class="text-sm text-slate-300">
            Drop a note and I will get back to you shortly. Tell me about the problem space, team,
            or idea you're exploring.
          </p>
        </div>

        <div class="space-y-5">
          <label class="block text-xs uppercase tracking-[0.3em] text-slate-400">
            Name
            <span class="text-primary">*</span>
          </label>
          <input
            v-model="message.fromName"
            class="w-full rounded-2xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Your name"
            type="text"
          />

          <label class="block text-xs uppercase tracking-[0.3em] text-slate-400">
            Email
            <span class="text-primary">*</span>
          </label>
          <input
            v-model="message.fromEmail"
            class="w-full rounded-2xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="you@email.com"
            type="email"
          />

          <label class="block text-xs uppercase tracking-[0.3em] text-slate-400">
            Message
            <span class="text-primary">*</span>
          </label>
          <textarea
            v-model="message.message"
            class="min-h-[10rem] w-full rounded-2xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="How can I help?"
          ></textarea>
        </div>

        <div class="flex justify-end">
          <button
            class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary/90 disabled:opacity-60"
            :disabled="isLoading"
            @click="sendMessage"
          >
            <Icon v-if="isLoading" icon="mdi:loading" class="h-5 w-5 animate-spin" />
            Send message
          </button>
        </div>
      </div>

      <div
        v-else
        class="flex flex-col items-center justify-center space-y-4 py-16 text-center text-primary"
      >
        <Icon icon="mdi:check-decagram" class="h-14 w-14" />
        <p class="text-xl font-semibold text-white">Message sent!</p>
        <p class="text-sm text-slate-300">
          Thanks for reaching out. I will get back to you as soon as possible.
        </p>
        <button
          class="rounded-full border border-primary/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/10"
          @click="disableModal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emailsjs from "@emailjs/browser";
import { Icon } from "@iconify/vue";

export default {
  name: "ContactModal",
  components: {
    Icon,
  },
  emits: ["close"],
  data: () => ({
    message: {
      fromName: "",
      fromEmail: "",
      message: "",
    },
    requestSent: false,
    isLoading: false,
  }),
  methods: {
    disableModal() {
      this.$emit("close");
      this.resetForm();
    },
    resetForm() {
      this.message = {
        fromName: "",
        fromEmail: "",
        message: "",
      };
      this.isLoading = false;
      this.requestSent = false;
    },
    sendMessage() {
      if (!this.isValid) {
        return;
      }
      this.isLoading = true;
      emailsjs
        .send(
          "service_kq2dp0r",
          "template_vv5m43l",
          {
            from_name: this.message.fromName,
            message: this.message.message,
            reply_to: this.message.fromEmail,
            to_name: this.message.fromName,
          },
          "VkFmkebMT8BlTOFl_"
        )
        .then(
          () => {
            this.isLoading = false;
            this.requestSent = true;
          },
          () => {
            this.isLoading = false;
          }
        );
    },
  },
  computed: {
    isValid() {
      return (
        this.message.fromName.trim() !== "" &&
        this.message.fromEmail.includes("@") &&
        this.message.message.trim() !== ""
      );
    },
  },
};
</script>
