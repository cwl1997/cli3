<template>
    <div class="container">
        <div class="selcet_area">
            <div v-for="(item,index) in list" :key="index">
                <div class="area_item">{{item.name}}</div>
            </div>
        </div>
        <div class="selcet_area">

        </div>
    </div>
</template>

<script>
import areaList from '@/common/pca-code.json'
export default {
    data () {
        return {
        disabled: false,
        list:[]
    }
},
    created(){
        this.list = areaList
        console.log(this.list)
    },
    methods: {

  }
}
</script>

<style lang='scss' scoped>
.container{
    .selcet_area{
        .area_item{
            width: 100%;
            height: 30px;
            border-bottom: 1px solid #EEF1F6;
            line-height: 30px;
            padding-left: 20px;
        }
    }
}
</style>