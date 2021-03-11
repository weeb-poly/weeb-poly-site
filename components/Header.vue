<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><NuxtLink to="/">WPI</NuxtLink></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <NuxtLink to="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav ref="navbar" id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>

          <!--
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          -->

          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
        <i ref="mob_nav_tog" class="bi bi-list mobile-nav-toggle" v-on:click="mobile_nav_toggle"></i>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    mobile_nav_toggle() {
      this.$refs.navbar.classList.toggle('navbar-mobile');
      this.$refs.mob_nav_tog.classList.toggle('bi-list');
      this.$refs.mob_nav_tog.classList.toggle('bi-x');
    },
    dropdown_toggle(e) {
      if (this.$refs.navbar.classList.contains('navbar-mobile')) {
        e.preventDefault();
        e.target.nextElementSibling.classList.toggle('dropdown-active');
      }
    }
  },
  mounted() {
    // Mobile nav dropdowns activate
    let dropdownItems = this.$refs.navbar.querySelectorAll('.dropdown > a');
    for (const items of dropdownItems) {
      items.addEventListener('click', this.dropdown_toggle);
    }
  },
  beforeDestroy() {
    let dropdownItems = this.$refs.navbar.querySelectorAll('.dropdown > a');
    for (const items of dropdownItems) {
      items.removeEventListener('click', this.dropdown_toggle);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/header';
@import '~/assets/scss/parts/navigation';
</style>
