<template>
  <div class="card">
    <h5 class="card-header">{{ data.title }}</h5>
    <img class="card-img-top" :src="cover">
    <div class="card-body m-2 p-0">
      <table v-if="!preview" class="table card-text fs-7">
        <tbody>
          <tr v-for="item in data.info" :key="item.key">
            <th scope="row">{{ item.key }}</th>
            <td v-html="item.value"></td>
          </tr>
        </tbody>
      </table>

      <NuxtLink v-if="preview" class="btn btn-primary" :to="data.path">View</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table.card-text {
  tr:last-child > * {
    border-bottom-width: 0;
  }

  th, td {
    padding: 0.25rem!important;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.fs-7 {
  font-size: 0.75rem!important;
}
</style>

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

  head() {
    if (!(this.preview)) {
      return {
        meta: [
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.data.title
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: 'One of the Weeb Poly Mascots'
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'Weeb Poly'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.cover
          },
        ]
      };
    }
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
