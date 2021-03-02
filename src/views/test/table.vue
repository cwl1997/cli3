<template>
  <div>
    <el-form label-position="left" ref="searchData" :model="from">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item prop="modular">
            <el-input
              class="radius-input"
              placeholder="请输入VIN码"
              prefix-icon="el-icon-search"
              v-model="from.modular"
              clearable
              size="small"
              style="border-radius:20px;"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="mechanism">
            <!-- <selectx
              v-model="from.mechanism"
              :disabled="openMode == 'show'"
              placeholder="所属机构"
            /> -->
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="mechanism">
            <!-- <selectx
              v-model="from.mechanism"
              :disabled="openMode == 'show'"
              placeholder="车辆型号"
            /> -->
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <TbBtn
      :btnClass="btnClass"
      @toDeal="toDeal()"
      @toTrace="toTrace()"
      @clean="cleansearch"
    ></TbBtn> -->
    <el-table
      :data="tableData"
      :span-method="SpanMethod"
      border
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column type="selection" width="55"></el-table-column> -->
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column
        prop="iccid"
        label="ICCID"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="vin"
        label="VIN码"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="车牌号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="所属机构"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="车辆型号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="发动机型号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="终端型号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="芯片型号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="最后有效定位时间"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="最后位置"
        align="center"
      ></el-table-column>
    </el-table>
    <div class="pading-table">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMode: true,
      disabled: false,
      currentPage4: null,
      from: {
        modular: "",
        operationType: "",
        mechanism: "",
        beginDate: null,
        endDate: null
      },
      btnClass: [
        {
          label: "导出",
          funName: "exportExcel"
        }
      ],
      tableData: [
        { iccid: 1, vin: 2 },
        { iccid: 1, vin: 3 },
        { iccid: 2, vin: 4 },
        { iccid: 3, vin: 5 },
        { iccid: 3, vin: 6 }
      ],
      newList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleSelectionChange() {},
    handleSizeChange() {},
    handleCurrentChange() {},
    getData() {
      let tableData = this.tableData;
      this.newList = this.getNewlist(tableData, "iccid");
      console.log("newarr", this.newList);
    },
    getNewlist(tableData, itemName) {
      // var that = this
      var arr = [];
      var fatherKey = 0;
      tableData.forEach(function(item) {
        //初始创建计数器
        var num = 0;
        var key = 0;
        var obj = [];
        obj.push(fatherKey);
        // 从数组头部开始遍历 查找相同的项并且找到相同的项把下标推进去。每个数据必定会找到一项相同
        tableData.forEach(function(index) {
          if (item[itemName] == index[itemName]) {
            num++;
            if (num >= 1) {
              obj.push(key);
            }
          }
          key++;
        });
        if (obj.length > 1) {
          arr.push(obj);
        }
        fatherKey++;
      });
      var repeatArr = [];

      console.log("arr", arr);
      // 去掉数组长度为2的项 因为数组长度为2就是他自己本身
      arr.forEach(function(item) {
        if (item.length != 2) {
          repeatArr.push(item.slice(1, item.length));
        }
      });
      // 这一步是去除每一项中相同的元素，就是他自己本身的那一项
      repeatArr = this.arrsort(repeatArr);
      return repeatArr;
    },
    arrsort(oldarr) {
      var h = {}; //定义一个hash表
      var arr = []; //定义一个临时数组

      for (var i = 0; i < oldarr.length; i++) {
        //循环遍历当前数组
        //对元素进行判断，看是否已经存在表中，如果存在则跳过，否则存入临时数组
        if (!h[oldarr[i]]) {
          //存入hash表
          h[oldarr[i]] = true;
          //把当前数组元素存入到临时数组中
          arr.push(oldarr[i]);
        }
      }
      return arr;
    },
    SpanMethod({ row, column, rowIndex, columnIndex }) {
      for (var i = 0; i < this.newList.length; i++) {
        var item = this.newList[i];
        var without = item.slice(1, item.length);
        if (rowIndex == item[0]) {
          if (columnIndex <= 1) {
            return { rowspan: item.length, colspan: 1 };
          }
        } else if (without.indexOf(rowIndex) != -1) {
          if (columnIndex <= 1) {
            return { rowspan: 0, colspan: 0 };
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
