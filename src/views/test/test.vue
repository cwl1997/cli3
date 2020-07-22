<template>
    <div>
        <el-button type="primary" @click="test">主要按钮</el-button>
        <div class="scroll_container">
            <div v-for="(item,index) in list" :key="index" class="scroll_item">
                <div >
                    12312
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { test } from '@/api/user'
export default {
    data () {
        return {
        disabled: false,
        list:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},]
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