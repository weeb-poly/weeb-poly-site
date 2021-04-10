<template>
  <div class="card">
    <h5 class="card-header">{{ data.title }}</h5>
    <img class="card-img-top" :src="dynamicImg(data.cover)">
    <div class="card-body m-2 p-0">
      <table v-if="showProps" class="table card-text fs-7">
        <tbody>
          <tr v-for="item in data.info" :key="item.key">
            <th scope="row">{{ item.key }}</th>
            <td v-html="item.value"></td>
          </tr>
        </tbody>
      </table>

      <NuxtLink v-if="showLink" class="btn btn-primary" :to="data.path">View</NuxtLink>
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
    showProps: {
      type: Boolean,
      default: true
    },
    showLink: {
      type: Boolean,
      default: false
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
