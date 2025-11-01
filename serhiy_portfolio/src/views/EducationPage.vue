<template>
  <div class="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-12">
    <button
      class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:border-primary/50 hover:text-white"
      @click="$router.back()"
    >
      <Icon icon="mdi:arrow-left" class="h-4 w-4 text-primary" />
      Back
    </button>

    <section class="glass-card space-y-6 p-8 md:p-10">
      <div class="space-y-3">
        <span class="section-title">Academic journey</span>
        <h1 class="text-3xl font-semibold text-white md:text-4xl">
          {{ education.degree }}
        </h1>
        <p class="text-sm uppercase tracking-[0.3em] text-slate-400">
          {{ education.timeline }}
        </p>
        <p class="text-base leading-relaxed text-slate-300">
          {{ education.school }}
        </p>
      </div>

      <div class="rounded-3xl border border-primary/40 bg-primary/10 p-6">
        <p class="text-xs uppercase tracking-[0.3em] text-primary/80">Thesis highlight</p>
        <p class="mt-2 text-lg font-medium text-white">{{ education.thesis }}</p>
      </div>
    </section>

    <section class="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-8 md:grid-cols-2">
      <div class="space-y-4">
        <p class="section-title text-accent/80">Core courses</p>
        <p class="text-sm text-slate-300">
          A balance between theoretical foundations and practical engineering prepared me to move
          quickly from concept to reliable delivery.
        </p>
      </div>
      <ul class="space-y-3">
        <li
          v-for="course in education.courses"
          :key="course"
          class="flex items-center gap-3 rounded-2xl border border-white/5 bg-background/60 px-4 py-3 text-sm text-white transition hover:border-primary/40 hover:bg-primary/10"
        >
          <Icon icon="mdi:bookmark-multiple-outline" class="h-5 w-5 text-primary" />
          {{ course }}
        </li>
      </ul>
    </section>

    <section class="glass-card space-y-6 p-8">
      <div class="space-y-2">
        <span class="section-title">Languages</span>
        <h2 class="text-2xl font-semibold text-white">How I collaborate</h2>
      </div>
      <p class="text-sm leading-relaxed text-slate-300">
        I thrive in international environments. Communicating decisions clearly in every language
        listed below keeps teams aligned and moving forward.
      </p>
      <div class="grid gap-3 md:grid-cols-2">
        <div
          v-for="lang in languages"
          :key="lang.name"
          class="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4"
        >
          <span class="text-sm font-semibold text-white">{{ lang.name }}</span>
          <span class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ lang.level }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { education, languages } from "@/data/resume";

export default {
  name: "EducationPage",
  components: {
    Icon,
  },
  data() {
    return {
      education,
      languages,
    };
  },
};
</script>
