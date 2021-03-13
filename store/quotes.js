export const state = () => ({
  list: []
})

export const mutations = {
  SET_QUOTES(state, quotes) {
    state.list = quotes;
  }
}

export const actions = {
  load({ commit }) {
    this.$content('quotes').fetch().then(response => {
      commit('SET_QUOTES', response.list);
    });
  }
};
