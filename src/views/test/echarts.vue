<template>
    <div>
        <!-- <echarts1/> -->
        <!-- <earth></earth> -->
        <hubei></hubei>
    </div>
</template>

<script>
import echarts1 from '@/components/echarts/eacharts'
import earth from '@/components/echarts/earth'
import hubei from '@/components/echarts/hubei'
export default {
    components:{
        echarts1,
        earth,
        hubei
    },
    data () {
        return {
        disabled: false,
    }
},
  
    created () {

},
    methods: {

  }
}
</script>

<style lang='scss' scoped>
</style>