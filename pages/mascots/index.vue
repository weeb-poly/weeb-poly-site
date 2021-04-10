<template>
  <main>
    <div class="breadcrumbs">
      <div class="container">
        <h2>Mascots</h2>
        <p>This is our list of mascots.</p>
      </div>
    </div>

    <div class="container">
      <div class="row my-1 row-cols-1 row-cols-md-3 g-4 justify-content-md-center" v-for="item in data" :key="item.dir">

        <div class="col">
          <div class="card mb-3">
            <h5 class="card-header">{{ item.title }}</h5>
            <img class="card-img-top" :src="item.profile_img">
            <div class="card-body">
              <NuxtLink class="btn btn-primary" :to="item.dir">View</NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const data = await $content('mascots', { deep: true })
        .where({ slug: 'text' })
        .without(['body'])
        .fetch();

      return { data };
    }
  }
</script>
