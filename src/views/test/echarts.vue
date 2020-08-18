<template>
    <div>
        <echarts1/>
        <!-- <earth></earth> -->
    </div>
</template>

<script>
import echarts1 from '@/components/echarts/eacharts'
import earth from '@/components/echarts/earth'
export default {
    components:{
        echarts1,
        earth
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