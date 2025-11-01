<template>
  <div class="mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-12">
    <div class="flex flex-wrap items-center gap-3">
      <button
        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:border-primary/50 hover:text-white"
        @click="$router.back()"
      >
        <Icon icon="mdi:arrow-left" class="h-4 w-4 text-primary" />
        Back
      </button>
      <span class="section-title">Professional experience</span>
    </div>

    <header class="glass-card space-y-4 p-8 md:p-10">
      <h1 class="text-3xl font-semibold text-white md:text-4xl">
        From domain modeling to production deploys
      </h1>
      <p class="text-base leading-relaxed text-slate-300">
        I love connecting business goals with well-crafted software. Below is a zoomed-in look at
        how I approach product delivery, with hands-on ownership of both backend and frontend
        stacks.
      </p>
    </header>

    <section class="relative space-y-10">
      <div class="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/20 to-transparent md:block"></div>

      <article
        v-for="experience in experiences"
        :key="experience.company"
        class="relative grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 md:grid-cols-[auto_minmax(0,1fr)] md:p-8"
      >
        <div class="flex items-start gap-4 md:flex-col md:items-center">
          <div class="hidden h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.25)] md:block"></div>
          <div class="rounded-2xl border border-primary/40 bg-primary/10 px-4 py-2 text-center">
            <p class="text-xs uppercase tracking-[0.3em] text-primary/80">
              {{ experience.start }} - {{ experience.end }}
            </p>
          </div>
        </div>
        <div class="space-y-6">
          <div class="space-y-2">
            <p class="text-sm uppercase tracking-[0.3em] text-slate-400">
              {{ experience.company }} - {{ experience.location }}
            </p>
            <h2 class="text-2xl font-semibold text-white md:text-3xl">{{ experience.role }}</h2>
            <p class="text-sm leading-relaxed text-slate-300">
              {{ experience.summary }}
            </p>
          </div>
          <ul class="space-y-3">
            <li
              v-for="point in experience.highlights"
              :key="point"
              class="flex items-start gap-3 rounded-2xl border border-white/5 bg-background/60 px-4 py-3 text-sm leading-relaxed text-slate-200 transition hover:border-primary/40 hover:bg-primary/10"
            >
              <Icon icon="mdi:chevron-right-circle-outline" class="mt-1 h-5 w-5 text-primary" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <section class="glass-card space-y-6 p-8">
      <div class="space-y-3">
        <span class="section-title">How we shipped</span>
        <h2 class="text-2xl font-semibold text-white md:text-3xl">Ceremonies and culture</h2>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <div
          v-for="habit in deliveryHabits"
          :key="habit.title"
          class="rounded-2xl border border-white/5 bg-white/5 p-5"
        >
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
              <Icon :icon="habit.icon" class="h-5 w-5 text-primary" />
            </div>
            <p class="text-sm font-semibold text-white">{{ habit.title }}</p>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ habit.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { experiences } from "@/data/resume";

export default {
  name: "ProfessionPage",
  components: {
    Icon,
  },
  data() {
    return {
      experiences,
      deliveryHabits: [
        {
          title: "Agile & Scrum ceremonies",
          description:
            "Planning, daily syncs, demos, and retros with clear outcomes keep teams focused and accountable.",
          icon: "mdi:calendar-check-outline",
        },
        {
          title: "Production-ready pipelines",
          description:
            "Azure DevOps CI/CD, automated checks, and staged releases ensure smooth deliveries to DEV, UAT, and PROD.",
          icon: "mdi:infinity",
        },
        {
          title: "Code reviews with empathy",
          description:
            "Treat reviews as collaborative design discussions, balancing guardrails with flexibility.",
          icon: "mdi:account-group-outline",
        },
        {
          title: "Security and compliance",
          description:
            "Embed OWASP practices, authentication protocols, and documentation so auditors and users trust the platform.",
          icon: "mdi:shield-check",
        },
      ],
    };
  },
};
</script>
