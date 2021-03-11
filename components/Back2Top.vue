<template>
  <a href="#" ref="back2top" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>
export default {
  methods: {
    toggleBacktotop() {
      let b = this.$refs.back2top;
      b.classList.toggle('active', (window.scrollY > 100));
    }
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener('load', this.toggleBacktotop);
      document.addEventListener('scroll', this.toggleBacktotop);
    });
  },
  beforeDestroy() {
    window.removeEventListener('load', this.toggleBacktotop);
    document.removeEventListener('scroll', this.toggleBacktotop);
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/general';
@import '~/assets/scss/parts/back-to-top';
</style>
