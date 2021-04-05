<template>
  <main class="mt-4">
    <div class="container">
      <div class="clearfix">
        <div class="col-md-3 float-md-end mb-3 ms-md-4">
          <div class="card">
            <h5 class="card-header">{{ text.title }}</h5>
            <img class="card-img-top" :src="text.profile_img">
            <table class="table card-body m-2 fs-7">
              <tbody>
                <tr v-for="item in info" :key="item.key">
                  <th scope="row">{{ item.key }}</th>
                  <td v-html="item.value"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="container">
          <nuxt-content :document="text" />
        </div>
      </div>

      <div class="container">
        <div class="row">
          <h4>Gallery</h4>
        </div>
        <div class="row my-1 row-cols-1 row-cols-md-3 g-3 justify-content-md-center">
          <div class="col" v-for="item in media" :key="item.src">
            <figure class="figure">
              <img :src="item.src" class="figure-img img-fluid rounded">
              <figcaption class="figure-caption" v-html="item.caption"></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
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

.fs-7 {
  font-size: 0.75rem!important;
}
</style>

<script>
  export default {
    async asyncData({ $content, params }) {
      const info = await $content('mascots', params.slug).search('slug', 'info').fetch();
      const media = await $content('mascots', params.slug).search('slug', 'media').fetch();
      const text = (await $content('mascots', params.slug).search('slug', 'text').fetch())[0];

      return { info, media, text };
    }
  }
</script>
