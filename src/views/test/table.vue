<template>
  <div class="container">
    <div>
      <el-button type="primary" @click="test">新增</el-button>
      <el-button type="primary" @click="showdata">保存</el-button>
    </div>
    <div>
      <el-form :model="tableData" ref="From">
        <div class="test-table">
          <el-table
            :data="tableData.params"
            style="width: 100%"
            @row-dblclick="changedate"
            :row-class-name="tableRowClassName"
          >
            <el-table-column label="日期" width="180">
              <template slot-scope="scope">
                <span v-if="scope.row.state !== 0">{{ scope.row.date }}</span>
                <div v-if="scope.row.state == 0">
                  <el-form-item>
                    <div
                      class="block"
                      style="display:flex;justify-content:center;"
                    >
                      <el-date-picker
                        v-model="scope.row.date"
                        style="width:100%"
                        type="date"
                        placeholder="选择日期"
                      >
                      </el-date-picker>
                    </div>
                  </el-form-item>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
              <template slot-scope="scope">
                <span v-if="scope.row.state !== 0">{{ scope.row.name }}</span>
                <div
                  v-if="scope.row.state == 0"
                  style="display: flex;
                justify-content: center;
                align-items: center;"
                >
                  <el-form-item
                    :rules="tableData.paramrules.name"
                    :prop="'params.' + scope.$index + '.name'"
                  >
                    <el-input
                      v-model="scope.row.name"
                      placeholder="请输入内容"
                    ></el-input>
                  </el-form-item>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="地址">
              <template slot-scope="scope">
                <span v-if="scope.row.state !== 0">{{
                  scope.row.address
                }}</span>
                <div v-if="scope.row.state == 0">
                  <el-form-item>
                    <el-select v-model="scope.row.address" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  plain
                  v-show="scope.row.state !== 1"
                  @click.stop
                  @click="cancelChange(scope.row.index)"
                  >取消修改</el-button
                >
                <el-button
                  type="danger"
                  plain
                  @click.stop
                  @click="deletetest(scope.row.index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        params: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            state: 1
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            state: 1
          }
        ],
        paramrules: {
          name: [
            {
              required: true,
              message: "请输入数据",
              trigger: "change"
            }
          ]
        }
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  created() {},
  methods: {
    test() {
      this.tableData.params.push({
        date: "",
        name: "",
        address: "",
        state: 0
      });
    },
    showdata() {
      // eslint-disable-next-line no-undef
      let type = true;
      this.$refs["From"].validate(valid => {
        console.log("valid", valid);
        if (!valid) {
          type = false;
        }
      });
      if (!type) return;
      this.tableData.params.forEach(item => {
        item.state = 1;
      });
      console.log(this.tableData.params);
    },
    tableRowClassName({ row, rowIndex }) {
      //把每一行的索引放进row
      row.index = rowIndex;
    },
    changedate(v, i, m) {
      v.state = 0;
      // console.log(v)
      console.log(i);
      console.log(m);
    },
    deletetest(v) {
      console.log(v);
      this.tableData.params.splice(v, 1);
    },
    cancelChange(v) {
      this.tableData.params[v].state = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
// .test-table {
//   ::v-deep {
//     .el-table th {
//       background-color: #fff;
//     }
//     .el-table td div {
//       // background-color: #f00;
//       margin-top: 5px;
//       .cell div {
//         background-color: #000;
//       }
//     }
//   }
// }
</style>
