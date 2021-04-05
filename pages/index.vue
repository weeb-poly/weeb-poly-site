<template>
  <main>
    <Hero></Hero>
    <About></About>
    <Counts></Counts>
    <WhyUs></WhyUs>

    <PopularCourses></PopularCourses>

    <Testimonials></Testimonials>
  </main>
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
