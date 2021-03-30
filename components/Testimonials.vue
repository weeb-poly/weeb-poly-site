<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-title">
        <h2>Testimonials</h2>
        <p>What are they saying</p>
      </div>

      <div ref="slider" class="testimonials-slider swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide" v-for="(item, index) in testimonials" :key="`testimonial-${index}`">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img v-bind:src="item.img" v-bind:alt="item.name" class="testimonial-img">
                <h3>{{ item.name }}</h3>
                <h4>{{ item.title }}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  {{ item.message }}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>

        </div>

        <div ref="pagination" class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/bundle';

export default {
  data: () => ({ testimonials: [] }),
  async fetch() {
    this.testimonials = await this.$content('quotes').fetch().then(resp => resp.list);
  },
  mounted() {
    let _swiper = new Swiper(this.$refs.slider, {
      speed: 600,
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: this.$refs.pagination,
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }
}
</script>

<style lang="scss">
@import "swiper/swiper-bundle.css";
@import '~/assets/scss/parts/testimonials';
</style>
