<template>
  <div class="mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-12">
    <button
      class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:border-primary/50 hover:text-white"
      @click="$router.back()"
    >
      <Icon icon="mdi:arrow-left" class="h-4 w-4 text-primary" />
      Back
    </button>

    <section class="glass-card space-y-4 p-8 md:p-10">
      <span class="section-title">Proof points</span>
      <h1 class="text-3xl font-semibold text-white md:text-4xl">Certificates & recognition</h1>
      <p class="text-base leading-relaxed text-slate-300">
        I invest in continuous learning to keep the tools I use sharp. These certificates highlight
        the areas where I have formal validation alongside hands-on experience.
      </p>
    </section>

    <section class="grid gap-6 md:grid-cols-2">
      <article
        v-for="certificate in certificates"
        :key="certificate.name"
        class="glass-card flex flex-col gap-4 p-6"
      >
        <div class="flex items-start justify-between">
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ certificate.type }}</p>
            <h2 class="mt-2 text-xl font-semibold text-white">{{ certificate.name }}</h2>
          </div>
          <button
            class="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-primary/40 hover:bg-primary/10"
            @click="openPreview(certificate)"
          >
            <Icon icon="mdi:magnify-plus-outline" class="h-5 w-5 text-primary" />
          </button>
        </div>
        <div
          class="relative overflow-hidden rounded-2xl border border-white/5 bg-background/60 transition hover:border-primary/40 hover:bg-primary/10"
        >
          <img
            :alt="certificate.name"
            :src="resolveImage(certificate.fileName)"
            class="w-full object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition group-hover:opacity-100">
            <Icon icon="mdi:magnify-plus-outline" class="h-8 w-8 text-primary" />
          </div>
        </div>
        <p class="text-sm leading-relaxed text-slate-300">
          {{ certificate.description }}
        </p>
      </article>
    </section>

    <image-modal
      v-if="activeCertificate"
      :imageName="activeCertificate.fileName"
      @close="activeCertificate = null"
    />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import ImageModal from "@/modals/ImageModal.vue";

export default {
  name: "CertificatesPage",
  components: {
    ImageModal,
    Icon,
  },
  data() {
    return {
      activeCertificate: null,
      certificates: [
        {
          name: "Dean's List Recognition",
          fileName: "dean_letter.png",
          type: "Academic",
          description:
            "Letter from the Dean acknowledging outstanding academic performance during the master's programme.",
        },
        {
          name: "Master's Degree Diploma",
          fileName: "masters_degree.png",
          type: "Academic",
          description:
            "Official diploma certifying the completion of the Master's in Computer Science and Engineering.",
        },
        {
          name: "PixieBrix Rapid Process Automation",
          fileName: "certificate_pixiebrix.png",
          type: "Professional",
          description:
            "Training on creating low-code automation for browser workflows, now used to boost client productivity.",
        },
        {
          name: "Jira Fundamentals",
          fileName: "certificate_jira.png",
          type: "Professional",
          description:
            "Certification covering Jira project configuration, workflow management, and agile board practices.",
        },
      ],
      imageContext: require.context("../assets/", false, /\.png$/),
    };
  },
  methods: {
    openPreview(certificate) {
      this.activeCertificate = certificate;
    },
    resolveImage(fileName) {
      return this.imageContext(`./${fileName}`);
    },
  },
};
</script>
