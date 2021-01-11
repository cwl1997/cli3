<template>
  <div>
    <avue-form
      :option="option"
      v-model="obj"
      @submit="submit"
      @error="error"
    ></avue-form>
  </div>
</template>

<script>
export default {
  props: ["addmodellVisible"],
  data() {
    return {
      disabled: false,
      option: {
        column: [
          {
            label: "芯片型号",
            prop: "name",
            rules: [
              {
                required: true,
                message: "请输入姓名",
                trigger: "blur"
              }
            ]
          },
          {
            label: "所属机构",
            prop: "sex",
            rules: [
              {
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          },
          {
            label: "芯片厂商名称",
            prop: "sex",
            rules: [
              {
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          },
          {
            label: "芯片生产企业机构代码",
            prop: "sex",
            rules: [
              {
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          },
          {
            label: "联系人姓名",
            prop: "sex",
            rules: [
              {
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          },
          {
            label: "联系人电话",
            prop: "sex",
            rules: [
              {
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          },
          {
            label: "厂商说明",
            prop: "sex",
            rules: [
              {
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          },
          {
            label: "芯片说明",
            prop: "sex",
            rules: [
              {
                required: false,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          }
        ]
      }
    };
  },
  watch() {},
  computed() {},
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
