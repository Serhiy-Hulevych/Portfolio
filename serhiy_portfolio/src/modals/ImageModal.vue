<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur">
    <button class="absolute inset-0 h-full w-full cursor-zoom-out" @click="disableModal"></button>
    <div class="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-background/80 p-4">
      <button
        class="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-primary/50 hover:bg-primary/10 hover:text-white"
        @click="disableModal"
      >
        <Icon icon="mdi:close" class="h-5 w-5" />
      </button>
      <img :src="getImageUrl()" :alt="imageName" class="max-h-[80vh] w-full rounded-2xl object-contain" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "ImageModal",
  components: {
    Icon,
  },
  props: {
    imageName: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
  data: () => ({
    context: require.context("../assets/", false, /\.(png|jpg|jpeg)$/),
  }),
  methods: {
    getImageUrl() {
      return this.context(`./${this.imageName}`);
    },
    disableModal() {
      this.$emit("close");
    },
  },
};
</script>
