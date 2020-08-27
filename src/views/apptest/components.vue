<template>
  <div class="container">
    <h4>{{ count }}</h4>
    <h4>{{ todos }}</h4>
    <input type="file" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos: function() {
      return this.$store.getters.doneTodos;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
