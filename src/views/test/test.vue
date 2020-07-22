<template>
    <div>
        <el-button type="primary" @click="test">主要按钮</el-button>
        <el-button type="primary" @click="changearr">数组去重</el-button>
        <el-button type="primary" @click="sortarr">数组排序</el-button>
        <el-button type="primary" @click="toapp">跳转测试页</el-button>
        <div>
            
        </div>
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
import { test } from '@/api/user'
export default {
    data () {
        return {
        disabled: false,
        list:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},],
        objArr : [
        {id: 0, name: "小明",age:22},
        {id: 1, name: "小张",age:25},
        {id: 2, name: "小李",age:23},
        {id: 3, name: "小孙",age:32},
        {id: 1, name: "小周",age:42},
        {id: 2, name: "小陈",age:19},
    ]
    }
},
   
    created () {

},
    methods: {
       async test(){
            let data = {}
            data.page = 1
            data.size = 10 
            data.appkey= 'ba3764357d6728cd'
            data.shouji = '17771510991'
            let res = await test(data)
            console.log(res)
            // this.$axios({
            //     url: "api/person",
            //     method: "get",
            //     params: {data}
            // }).then(res => {
            //     console.log(res)
            //  })
        },
        changearr(){
            let arr1 = this.objArr 
            let num =  this.$changeArr(arr1,'id')
            console.log(num)
        },
        sortarr(){
            let arr1 = this.objArr
            // arr1 = arr1.sort((a,b)=>{ return a.age-b.age})//升序
            // arr1 = arr1.sort((a,b)=>{return b.age-a.age})//降序
            // console.log(arr1)
            // let res = this.$Arrup(arr1,'age')
            // console.log(res)
            // let res2 = this.$Arrdown(arr1,'id')            
            // console.log(res2)
        },
        toapp(){
            this.$router.push({path:'/apptest/area',query:{id:212}})
        }
  }
}
</script>

<style lang='scss' scoped>
.scroll_container{
   width: 300px;
   height: 700px;
   overflow: hidden;
   overflow-y: scroll;
    .scroll_item{
        width: 300px;
        height: 90px;
        background:#f0f;
        border-bottom: 1px solid #000;
    }
    
}
</style>