<template>
  <div class="relative overflow-hidden">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0"
    >
      <div class="absolute -top-32 right-1/3 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-20">
      <section class="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
        <div class="space-y-6">
          <span class="section-title">Full stack developer</span>
          <h1 class="headline text-white">
            Hi, I'm <span class="text-primary">Serhiy</span>. I build resilient web products.
          </h1>
          <p class="text-lg leading-relaxed text-slate-300">
            {{ profile.summary }}
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <span
              v-for="tag in profile.tags"
              :key="tag"
              class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-slate-300"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex flex-wrap gap-4 pt-6">
            <button
              class="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-primary/90"
              @click="openContact"
            >
              <Icon icon="mdi:chat-processing-outline" class="h-5 w-5" />
              Let's talk
            </button>
            <button
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-primary/60 hover:bg-primary/10"
              @click="downloadCV"
            >
              <Icon icon="mdi:download" class="h-5 w-5 text-primary" />
              Download CV
            </button>
            <button
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-accent/10"
              @click="openLink(profile.links.linkedin, 'click-linkedin')"
            >
              <Icon icon="mdi:linkedin" class="h-5 w-5 text-primary" />
              LinkedIn
            </button>
            <button
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-accent/10"
              @click="openLink(profile.links.github, 'click-github')"
            >
              <Icon icon="mdi:github" class="h-5 w-5 text-primary" />
              GitHub
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="glass-card overflow-hidden p-4">
            <div class="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-background/80">
              <img
                :src="profilePhoto"
                alt="Portrait of Serhiy Hulevych"
                class="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
              <div class="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p class="text-xs uppercase tracking-[0.3em] text-slate-300">Based in</p>
                  <p class="text-sm font-semibold text-white">{{ profile.location }}</p>
                </div>
                <Icon icon="mdi:map-marker-radius-outline" class="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          <div class="glass-card flex h-full flex-col gap-6 p-8">
            <div class="space-y-2">
              <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Currently</p>
              <p class="text-xl font-semibold text-white">{{ highlights[1].value }}</p>
              <p class="text-sm text-slate-300">{{ highlights[1].caption }}</p>
            </div>
            <div class="grid gap-4">
              <div
                v-for="action in contactActions"
                :key="action.label"
                class="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
              >
                <div class="flex items-center gap-3">
                  <Icon :icon="action.icon" class="h-5 w-5 text-primary" />
                  <div>
                    <p class="text-xs uppercase tracking-wide text-slate-400">{{ action.label }}</p>
                    <p class="text-sm font-medium text-white">{{ action.value }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-6 rounded-3xl border border-white/5 bg-surface/60 p-8 backdrop-blur">
        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="item in highlights"
            :key="item.label"
            class="rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-primary/40 hover:bg-primary/10"
          >
            <p class="section-title text-xs text-slate-400">{{ item.label }}</p>
            <p class="mt-2 text-2xl font-semibold text-white">{{ item.value }}</p>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">
              {{ item.caption }}
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-10">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span class="section-title">Experience</span>
            <h2 class="text-3xl font-semibold text-white md:text-4xl">Recent roles</h2>
          </div>
          <button
            class="inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/10"
            @click="navigate('/Profession', 'open-experience')"
          >
            Deep dive
            <Icon icon="mdi:arrow-top-right" class="h-4 w-4" />
          </button>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="experience in experiences"
            :key="experience.company"
            class="glass-card flex h-full flex-col gap-5 p-6"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-slate-400">
                {{ experience.start }} - {{ experience.end }}
              </p>
              <h3 class="mt-2 text-2xl font-semibold text-white">
                {{ experience.role }}
              </h3>
              <p class="text-sm text-slate-300">
                {{ experience.company }} - {{ experience.location }}
              </p>
            </div>
            <p class="text-sm leading-relaxed text-slate-300">
              {{ experience.summary }}
            </p>
            <ul class="space-y-3">
              <li
                v-for="point in experience.highlights.slice(0, experiencePreviewCount)"
                :key="point"
                class="flex items-start gap-3 text-sm leading-relaxed text-slate-200"
              >
                <Icon icon="mdi:check-decagram" class="mt-1 h-5 w-5 text-accentMuted" />
                <span>{{ point }}</span>
              </li>
            </ul>
            <button
              v-if="experience.highlights.length > experiencePreviewCount"
              class="group mt-3 w-full rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              @click="navigate('/Profession', 'home-experience-more')"
            >
              <span class="flex items-center justify-between">
                <span>+{{ experience.highlights.length - experiencePreviewCount }} more highlights</span>
                <Icon icon="mdi:arrow-top-right" class="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </button>
          </article>
        </div>
      </section>

      <section class="space-y-10">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span class="section-title">Skills</span>
            <h2 class="text-3xl font-semibold text-white md:text-4xl">Stacks & strengths</h2>
          </div>
          <button
            class="inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/10"
            @click="navigate('/Education', 'open-education')"
          >
            Education
            <Icon icon="mdi:open-in-new" class="h-4 w-4" />
          </button>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <div
            v-for="group in skills"
            :key="group.title"
            class="glass-card flex flex-col gap-6 p-6"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-accent/80">{{ group.title }}</p>
              <p class="mt-1 text-sm text-slate-300">
                Focused on pragmatic solutions with clean code and guardrails.
              </p>
            </div>
            <ul class="grid gap-3">
              <li
                v-for="item in group.items"
                :key="item.name"
                class="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-primary/40 hover:bg-primary/10"
              >
                <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon :icon="item.icon" class="h-6 w-6 text-primary" />
                </div>
                <span class="text-sm font-medium text-white">{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-10">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span class="section-title">Projects & Labs</span>
            <h2 class="text-3xl font-semibold text-white md:text-4xl">Outside of work</h2>
          </div>
          <button
            class="inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/10"
            @click="navigate('/Certificates', 'open-certificates')"
          >
            Certificates
            <Icon icon="mdi:certificate-outline" class="h-4 w-4" />
          </button>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <article
            v-for="project in projects"
            :key="project.name"
            class="glass-card flex h-full flex-col gap-6 p-6"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ project.timeline }}</p>
              <h3 class="mt-2 text-2xl font-semibold text-white">{{ project.name }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-300">
                {{ project.description }}
              </p>
            </div>
            <ul class="space-y-3">
              <li
                v-for="outcome in project.outcomes"
                :key="outcome"
                class="flex items-start gap-3 text-sm leading-relaxed text-slate-200"
              >
                <Icon icon="mdi:lightning-bolt-outline" class="mt-1 h-5 w-5 text-accentMuted" />
                <span>{{ outcome }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur md:grid-cols-[2fr_1fr]">
        <div>
          <span class="section-title">Languages</span>
          <h2 class="text-3xl font-semibold text-white md:text-4xl">Where I feel at home</h2>
          <p class="mt-3 max-w-xl text-sm text-slate-300">
            Working across distributed teams taught me to adapt quickly, collaborate transparently,
            and document decisions so everyone stays aligned.
          </p>
        </div>
        <ul class="grid gap-4">
          <li
            v-for="lang in languages"
            :key="lang.name"
            class="flex items-center justify-between rounded-2xl border border-white/5 bg-background/60 px-5 py-4"
          >
            <span class="text-sm font-semibold text-white">{{ lang.name }}</span>
            <span class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ lang.level }}</span>
          </li>
        </ul>
      </section>

      <section class="grid gap-4 md:grid-cols-3">
        <button
          v-for="card in quickLinks"
          :key="card.title"
          class="group rounded-3xl border border-white/5 bg-white/5 p-6 text-left transition hover:border-primary/40 hover:bg-primary/10"
          @click="navigate(card.to, card.analytics)"
        >
          <div class="flex items-center justify-between">
            <span class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ card.section }}</span>
            <Icon icon="mdi:arrow-top-right" class="h-5 w-5 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p class="mt-3 text-xl font-semibold text-white">{{ card.title }}</p>
          <p class="mt-2 text-sm leading-relaxed text-slate-300">
            {{ card.description }}
          </p>
        </button>
      </section>
    </div>

    <contact-modal v-if="wantContact" @close="closeContact" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useAppInsights } from "vue3-application-insights";
import ContactModal from "@/modals/ContactModal.vue";
import profilePhoto from "@/assets/profile-picture-nb.png";
import {
  profile,
  highlights,
  skills,
  experiences,
  projects,
  contactActions,
  languages,
} from "@/data/resume";

export default {
  name: "HomePage",
  components: {
    ContactModal,
    Icon,
  },
  data() {
    return {
      profile,
      highlights,
      skills,
      experiences,
      projects,
      contactActions,
      languages,
      quickLinks: [
        {
          section: "Learn More",
          title: "Academic Journey",
          description: "Explore the coursework and thesis that shaped my engineering mindset.",
          to: "/Education",
          analytics: "cta-education",
        },
        {
          section: "Track Record",
          title: "Professional Detail",
          description: "Dive into responsibilities, ceremonies, and the impact delivered with each team.",
          to: "/Profession",
          analytics: "cta-profession",
        },
        {
          section: "Proof Points",
          title: "Certificates & Kudos",
          description: "See the credentials and recognition that validate my continuous learning.",
          to: "/Certificates",
          analytics: "cta-certificates",
        },
      ],
      wantContact: false,
      appInsights: null,
      profilePhoto,
      experiencePreviewCount: 5,
    };
  },
  created() {
    this.appInsights = useAppInsights();
  },
  methods: {
    openContact() {
      this.track("click-contact");
      this.wantContact = true;
    },
    closeContact() {
      this.wantContact = false;
    },
    downloadCV() {
      this.track("download-cv");
      import("@/assets/CV-Serhiy_Hulevych.pdf").then((pdfModule) => {
        const link = document.createElement("a");
        link.download = "CV-Serhiy-Hulevych.pdf";
        link.href = pdfModule.default;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    openLink(url, event) {
      this.track(event);
      window.open(url, "_blank", "noopener");
    },
    navigate(route, event) {
      this.track(event);
      this.$router.push(route);
    },
    track(name) {
      if (this.appInsights && typeof this.appInsights.trackEvent === "function") {
        this.appInsights.trackEvent({ name });
      }
    },
  },
};
</script>
