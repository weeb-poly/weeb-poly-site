<template>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>
export default {
    mounted() {
        /**
         * Back to top button
         */
        let backtotop = document.querySelector('.back-to-top');
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                } else {
                    backtotop.classList.remove('active');
                }
            }
            window.addEventListener('load', toggleBacktotop);
            document.addEventListener('scroll', toggleBacktotop);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/general';
@import '~/assets/scss/parts/back-to-top';
</style>
