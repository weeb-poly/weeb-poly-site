<template>
    <section id="popular-courses" class="courses">
      <div class="container">

        <div class="section-title">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-2 mb-2" v-for="(item, index) in courses" :key="`courses-${index}`">
            <div class="course-item">
              <img class="img-fluid" v-bind:src="item.img" v-bind:alt="item.name">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>{{ item.label }}</h4>
                  <!-- <p class="price">$169</p> -->
                </div>

                <h3><a href="#">{{ item.name }}</a></h3>
                <p>{{ item.desc }}</p>
<!--                 <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="https://via.placeholder.com/600x600.jpg" class="img-fluid" alt="">
                    <span>Antonio</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;65
                  </div>
                </div> -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
</template>

<script>
export default {
  data: () => ({ courses: [] }),
  async fetch() {
    this.courses = await this.$content('courses').fetch().then(resp => resp.list);
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/courses';
</style>
