<template>
  <basic-container>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input
          class="radius-input"
          placeholder="芯片型号"
          prefix-icon="el-icon-search"
          v-model="input1"
          size="small"
          style="border-radius:20px;"
        >
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          class="radius-input"
          placeholder="芯片厂商名称"
          prefix-icon="el-icon-search"
          v-model="input1"
          size="small"
          style="border-radius:20px;"
        >
        </el-input>
      </el-col>
      <el-col :span="4">
        <selectx :disabled="openMode == 'show'" placeholder="芯片备案情况" />
      </el-col>
      <el-col :span="4">
        <selectx :disabled="openMode == 'show'" placeholder="标识符申请状态" />
      </el-col>
      <el-col :span="4">
        <selectx :disabled="openMode == 'show'" placeholder="所属机构" />
      </el-col>
    </el-row>
    <avue-crud
      style="margin-top:20px;"
      :option="option"
      @search-change="searchChange"
      :data="data"
    >
      <template slot="menuLeft">
        <el-button type="primary" @click="toadd" size="small"
          >芯片型号备案</el-button
        >
        <el-button type="primary" size="small">标识符申请</el-button>
      </template>
      <template slot="menuRight">
        <el-button icon="el-icon-search" circle size="small"></el-button>
      </template>
    </avue-crud>
    <div style="width:100%;display:flex;flex-direction: row-reverse;">
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
    <el-dialog
      width="60%"
      :visible.sync="addmodellVisible"
      modal-append-to-body="false"
    >
      <addmodel></addmodel>
    </el-dialog>
  </basic-container>
</template>

<script>
import addmodel from "./dialog/addmodelFiling";
export default {
  components: { addmodel },
  data() {
    return {
      input1: "",
      search: {},
      addmodellVisible: true,
      page1: {
        currentPage: 1,
        total: 0,
        //   layout: "total,pager,prev, next",
        background: false,
        pageSize: 10
      },
      data: [
        {
          text1: "内容1-1",
          text2: "内容1-2"
        },
        {
          text1: "内容2-1",
          text2: "内容2-2",
          img:
            "https://s1.tuchong.com/content-image/202008/7198d4e9a09f0b2b2905d5df6719d270.jpg"
        }
      ],
      option: {
        align: "center",
        index: true,
        indexLabel: "序号",
        excelBtn: true,
        searchBtn: true,
        addBtn: false,
        columnBtn: false,
        menu: false,
        column: [
          {
            label: "芯片型号",
            prop: "text2"
          },
          {
            label: "芯片备案状态",
            prop: "text2",
            width: 160
          },
          {
            label: "标识符申请状态",
            prop: "text2",
            width: 160
          },
          {
            label: "标识符",
            prop: "text2"
          },
          {
            label: "所属机构",
            prop: "text2"
          },
          {
            label: "芯片生产企业机构代码",
            prop: "text2",
            width: 160
          },
          {
            label: "芯片厂商名称",
            prop: "text2",
            width: 160
          },
          {
            label: "联系人姓名",
            prop: "text2",
            width: 160
          },
          {
            label: "联系人电话",
            prop: "text2",
            width: 160
          },
          {
            label: "厂商说明",
            prop: "text2"
          },
          {
            label: "芯片说明",
            prop: "text2"
          },
          {
            label: "厂商执照图片",
            prop: "img",
            type: "upload",
            width: 160
          },
          {
            label: "iso9001Img资质文件",
            prop: "text2",
            width: 160
          },
          {
            label: "iso14001资质文件",
            prop: "text2",
            width: 160
          },
          {
            label: "国密资质文件",
            prop: "text2",
            width: 160
          },
          {
            label: "安全芯片厂家授权书",
            prop: "text2",
            width: 160
          },
          {
            label: "录入人",
            prop: "text2"
          },
          {
            label: "录入时间",
            prop: "text2"
          },
          {
            label: "备注",
            prop: "text2"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    sizeChange(val) {
      this.page1.currentPage = 1;
      this.page1.pageSize = val;
      this.getList();
      this.$message.success("行数" + val);
    },
    currentChange(val) {
      this.page1.currentPage = val;
      this.getList();
      this.$message.success("页码" + val);
    },
    toadd() {
      this.addmodellVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.radius-input /deep/.el-input__inner {
  border-radius: 25px !important;
}
</style>
