export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('quotes/load');
  }
}
