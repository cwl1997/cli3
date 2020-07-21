<template>
    <div>
        <el-button type="primary" @click="test">主要按钮</el-button>
    </div>
</template>

<script>
import { login } from '@/api/user'
export default {
    data () {
        return {
        disabled: false,
    }
},
   
    created () {

},
    methods: {
       async test(){
            let data = {}
            data.page = 1
            data.size = 10 
            // data.appkey= 'ba3764357d6728cd'
            // data.shouji = '17771510991'
            let res = await login(data)
            console.log(res)
            // this.$axios({
            //     url: "api/person",
            //     method: "get",
            //     params: {}
            // }).then(res => {
            //     console.log(res)
            //  })
        }
  }
}
</script>

<style lang='scss' scoped>
</style>