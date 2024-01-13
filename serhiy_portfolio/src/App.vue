<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html {
  overflow-x: auto;
  overflow-y: auto !important;
}

#app {
  background: #0B0A07;
  color: white;
  height: 100vh;
  width: 100%;
  overflow-x: auto !important;
  overflow-y: auto !important;
}
</style>
