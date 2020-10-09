<template>
  <div>
    <!-- <el-button type="primary" @click="jiami">加密</el-button> -->
    <!-- <el-button type="primary" @click="getRes">解密</el-button> -->
    <!-- <h3>{{$store.state.count}}</h3> -->
    <h4>{{ count }}</h4>
    <h4>{{ todos }}</h4>
    <el-button type="primary" @click="add">增加</el-button>
    <!-- <dropdown></dropdown> -->
    <!-- <el-button type="primary" @click="reduce(10)">减少</el-button> -->
    <!-- <el-button type="primary" @click="sortarr">数组排序</el-button> -->
    <!-- <el-button type="primary" @click="toapp">跳转测试页</el-button>         -->
    <div></div>
    <!-- <div class="scroll_container">
            <div v-for="(item,index) in list" :key="index" class="scroll_item">
                <div >
                    12312
                </div>
            </div>
        </div> -->
  </div>
</template>

<script>
// import { test } from "@/api/user";
import AES from "@/common/utils.js";
export default {
  data() {
    return {
      disabled: false,
      list: [],
      objArr: [
        { id: 0, name: "小明", age: 22 },
        { id: 1, name: "小张", age: 25 },
        { id: 2, name: "小李", age: 23 },
        { id: 3, name: "小孙", age: 32 },
        { id: 1, name: "小周", age: 42 },
        { id: 2, name: "小陈", age: 19 }
      ]
    };
  },

  created() {
    // console.log(this.$router.options);
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos: function() {
      return this.$store.getters.doneTodos;
    }
  },
  methods: {
    add() {
      let arr = this.objArr.filter(item => {
        return item.id == 2;
      });
      console.log(arr);
      //    同步
      // this.$store.commit('mutationsAddCount',v);
      // 异步
      // this.$store.dispatch("actionsAddCount", v);
      // let msg = { userName: "17970000001", password: "19880914z" };
      // test(msg).then(res => {
      //   console.log(res);
      // });
      // console.log(this.count)
    },
    reduce(n) {
      //    同步
      // this.$store.commit('mutationsReduceCount',n);
      //异步
      this.$store.dispatch("actionsReduceCount", n);
    },
    async test() {
      // let data = {}
      // data.page = 1
      // data.size = 10
      // data.appkey= 'ba3764357d6728cd'
      // data.shouji = '17771510991'
      // // let reqdata ={page:1,size:10}/
      // let res = await testRe()
      let nums = [1, 2, 3, 4];
      nums.splice(nums.length - 1, 1);
      console.log(nums);
    },
    changearr() {
      let arr1 = this.objArr;
      let num = this.$changeArr(arr1, "id");
      console.log(num);
    },
    sortarr() {
      // eslint-disable-next-line no-unused-vars
      var arr1 = this.objArr;
      // arr1 = arr1.sort((a,b)=>{ return a.age-b.age})//升序
      // arr1 = arr1.sort((a,b)=>{return b.age-a.age})//降序
      // console.log(arr1)
      // let res = this.$Arrup(arr1,'age')
      // console.log(res)
      // let res2 = this.$Arrdown(arr1,'id')
      // console.log(res2)
    },
    toapp() {
      this.$router.push({ path: "/apptest/area", query: { id: 212 } });
    },
    jiami() {
      let appid = `cx02x0723092228hje`;
      let msg = { userName: "17970000001", password: "123456" };
      msg = JSON.stringify(msg);
      //    console.log(msg)

      const Base64 = require("js-base64").Base64;
      const exStr = Base64.encode(msg);
      //    console.log(exStr)
      var keys = "V2kvh3vpLlOwKH251/L4JROVz4+NT/YSwXeVuW9lzxk=";
      // eslint-disable-next-line no-unused-vars
      let keyvalue = this.getUTF8Bytes(keys);
      //    console.log(keyvalue)
      var encrypts = AES.encrypt(JSON.stringify(exStr), keys);
      //    res =  Base64.decode(res)
      console.log(encrypts);
      // eslint-disable-next-line no-unused-vars
      let mima = appid + encrypts;
      //    var dess = AES.decrypt(res,keys);
      //    console.log(mima)
      mima = this.$md5(mima);
      //    console.log(mima)
      //    console.log(dess)
    },
    byte(str) {
      var ch,
        st,
        re = [];
      for (var i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i); // get char
        st = []; // set up "stack"
        do {
          st.push(ch & 0xff); // push byte to stack
          ch = ch >> 8; // shift value down by 1 byte
        } while (ch);
        // add stack contents to result
        // done because chars have "wrong" endianness
        re = re.concat(st.reverse());
      }
      // return an array of bytes
      return re;
    },
    getUTF8Bytes(str) {
      var bytes = [];
      var len = str.length;
      for (var i = 0; i < len; ++i) {
        var code = str.charCodeAt(i);
        if (code >= 0x10000 && code <= 0x10ffff) {
          bytes.push((code >> 18) | 0xf0); // 第一个字节
          bytes.push(((code >> 12) & 0x3f) | 0x80);
          bytes.push(((code >> 6) & 0x3f) | 0x80);
          bytes.push((code & 0x3f) | 0x80);
        } else if (code >= 0x800 && code <= 0xffff) {
          bytes.push((code >> 12) | 0xe0);
          bytes.push(((code >> 6) & 0x3f) | 0x80);
          bytes.push((code & 0x3f) | 0x80);
        } else if (code >= 0x80 && code <= 0x7ff) {
          bytes.push((code >> 6) | 0xc0);
          bytes.push((code & 0x3f) | 0x80);
        } else {
          bytes.push(code);
        }
      }

      return bytes;
    },
    getRes() {
      var keys = "V2kvh3vpLlOwKH251/L4JROVz4+NT/YSwXeVuW9lzxk=";
      let res =
        "dQJFqXksuANzdLuP1xKaDhmIuxgfamTWnJ8On8M5Fn+RfX6Wwv+n7o1fbRgByLj77Ko+N1US7fgcPxTOoR/wg2c283r2GBl18gRmRqdoTdFGMcq0JOLVFqf2hd7UInlblAlX1Anj74PYy7lnIbOyDEFO/Rc4oLew6aP2JzJ9oqJWwkvSfssGrU/qjM/dER1U86F4AoF6sduzYisUQKI9g6p5qR52wLi2EuQ1PwfFbDLaDuaKvcBJ2lO1+96/zOHd";
      // let res = ":MGA0WCsGuylBDimZtb6b8ml/e85MAWy3Ah1XtR4MQIgwJD8zsKHBxROkrZtX6EtGhTa3K6QVHkx2ilbfRn3/nw=="
      var dess = AES.decrypt(res, keys);
      console.log(dess);
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll_container {
  width: 300px;
  height: 700px;
  overflow: hidden;
  overflow-y: scroll;
  .scroll_item {
    width: 300px;
    height: 90px;
    background: #f0f;
    border-bottom: 1px solid #000;
  }
}
</style>
