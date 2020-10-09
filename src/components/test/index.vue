<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      {{ item.name }}
      <div v-if="item.children">
        <test :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    list: { type: Array, default: () => {} }
  },
  data() {
    return {
      disabled: false
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
