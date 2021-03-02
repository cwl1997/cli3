<template>
  <div>
    <el-button type="primary" size="small" @click="exportExcel">导出</el-button>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      id="out-put"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-table
      ref="multipleTable"
      :data="multipleSelection"
      v-show="false"
      id="select-put"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import FileSaver from "file-saver";
// import XLSX from "xlsx";
export default {
  data() {
    return {
      disabled: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  created() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    exportExcel() {
      //  如果有固定列，导出的数据会重复，所以要过滤掉
      //   let fix = document.querySelector(".el-table__fixed-right");
      //   let wb;
      //   if (fix) {
      //     // 判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去
      //     // 这是个id选择器，我们在需要导出的表格上面加上id就行
      //     wb = XLSX.utils.table_to_book(
      //       document.querySelector("#out-put").removeChild(fix)
      //     );
      //     document.querySelector("#out-put").appendChild(fix);
      //   } else {
      //     wb = XLSX.utils.table_to_book(document.querySelector("#out-put"));
      //   }
      //   /* 获取二进制字符串作为输出 */
      //   let wbout = XLSX.write(wb, {
      //     bookType: "xlsx",
      //     bookSST: true,
      //     type: "array"
      //   });
      //   try {
      //     // Blob 对象表示一个不可变、原始数据的类文件对象。
      //     // Blob 表示的不一定是JavaScript原生格式的数据。
      //     // File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
      //     // 返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
      //     FileSaver.saveAs(
      //       new Blob([wbout], { type: "application/octet-stream" }),
      //       "抄表功能.xlsx"
      //     );
      //   } catch (e) {
      //     if (typeof console !== "undefined") console.log(e, wbout);
      //   }
      //   return wbout;
      /* 从表生成工作簿对象 */
      //   var wb = XLSX.utils.table_to_book(document.querySelector("#out-put"));
      //   var wb = XLSX.utils.table_to_book(document.querySelector("#select-put"));
      var selectDom = document.querySelector("#out-put");
      console.log(selectDom);
      /* 获取二进制字符串作为输出 */
      //   var wbout = XLSX.write(wb, {
      //     bookType: "xlsx",
      //     bookSST: true,
      //     type: "array"
      //   });
      //   try {
      //     FileSaver.saveAs(
      //       //Blob 对象表示一个不可变、原始数据的类文件对象。
      //       //Blob 表示的不一定是JavaScript原生格式的数据。
      //       //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
      //       //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
      //       new Blob([wbout], { type: "application/octet-stream" }),
      //       //设置导出文件名称
      //       "test.xlsx"
      //     );
      //   } catch (e) {
      //     if (typeof console !== "undefined") console.log(e, wbout);
      //   }
      //   return wbout;
    }
  }
};
</script>

<style lang="scss" scoped></style>
