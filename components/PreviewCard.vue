<template>
  <div class="card">
    <NuxtLink class="card-header h5" :to="data.path">{{ data.title }}</NuxtLink>
    <img class="card-img-top" :src="cover">
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    preview: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      cover: ''
    }
  },

  async fetch() {
    this.cover = this.dynamicImg(this.data.cover);
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
