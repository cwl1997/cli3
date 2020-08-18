import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state={
  count: 200,
  todos: [
    { id: 1, text: '水果类', done: true },
    { id: 2, text: '苹果', done: true },
    { id: 3, text: '苹果', done: false}
    ]
}

const mutations = {
  mutationsAddCount(state, n = 0) {
      return (state.count += n)
  },
  mutationsReduceCount(state, n = 0) {
      return (state.count -= n)
  }
}
const actions = {
  actionsAddCount(context, n = 0) {
      console.log(context)
      return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount({ commit }, n = 0) {
      return commit('mutationsReduceCount', n)
  }
}

const getters={
  doneTodos: state => {//通过方法访问
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {//通过属性访问
      return getters.doneTodos.length
    }
  }

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  state,
  mutations,
  actions,
  getters
});
