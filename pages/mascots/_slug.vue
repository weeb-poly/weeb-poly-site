<template>
  <main class="my-4">
    <section id="mascot-info" class="container">
      <div class="clearfix">
        <div class="col-md-3 float-md-end mb-3 ms-md-4">
          <InfoCard :data="data"></InfoCard>
        </div>

        <div class="container">
          <h2>{{ data.title }}</h2>

          <nuxt-content :document="data" />
        </div>
      </div>
    </section>

    <section class="container" v-if="data.media">
      <div class="row">
        <h4>Gallery</h4>
      </div>

      <!--
      <div class="row my-1" :data-masonry="JSON.stringify({'percentPosition':true})">
        <div class="col-sm-6 col-lg-4 mb-4" v-for="item in data.media" :key="item.src">
          <div class="card">
            <img :src="dynamicImg(item.src)" class="card-img-top">

            <div class="card-body">
              <p class="card-text" v-html="item.caption"></p>
            </div>
          </div>
        </div>
      </div>
      -->

      <div class="row my-1 row-cols-1 row-cols-md-3 g-3 justify-content-md-center">
        <div class="col" v-for="item in data.media" :key="item.src">
          <!--
          <figure class="figure">
            <img :src="dynamicImg(item.src)" class="figure-img img-fluid rounded">
            <figcaption class="figure-caption" v-html="item.caption"></figcaption>
          </figure>
          -->
          <div class="card h-100">
            <img :src="dynamicImg(item.src)" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title" v-html="item.title"></h5>
              <p class="card-text" v-html="item.text"></p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<style lang="scss" scoped>
table.card-body {
  tr:last-child > * {
    border-bottom-width: 0;
  }

  th, td {
    padding: 0.25rem!important;
  }
}

.card-img-top {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}

.fs-7 {
  font-size: 0.75rem!important;
}
</style>

<script>
export default {
  async asyncData({ $content, params }) {
    const data = await $content('mascots', params.slug).fetch();

    return { data };
  },

  methods: {
    dynamicImg(url) {
      if (!url) {
        return
      }

      if (url.includes('://')) {
        return url;
      } else {
        return require(`~/assets/img/${url}`);
      }
    }
  }
};
</script>
