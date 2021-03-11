<template>
  <section id="hero" class="d-flex justify-content-center align-items-center">
    <div class="container position-relative">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/" class="btn-get-started">Home</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>

<style lang="scss">
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/general';
@import '~/assets/scss/parts/sections';
@import '~/assets/scss/parts/hero';
</style>
