<template>
<div>
  <Hero></Hero>

  <main id="main">
    <About></About>
    <Counts></Counts>
    <WhyUs></WhyUs>

    <!--<Features></Features>-->

    <PopularCourses></PopularCourses>

    <Testimonials></Testimonials>
  </main>
</div>
</template>

<script>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Counts from '../components/Counts.vue';
import WhyUs from '../components/WhyUs.vue';
import PopularCourses from '../components/PopularCourses.vue';
import Testimonials from '../components/Testimonials.vue';

export default {
  components: { Hero, About, Counts, WhyUs, PopularCourses, Testimonials },
}
</script>

<style lang="scss" scoped>
</style>
