<template>
    <div class="container">
        <div class="box">
            <div class="selcet_area" @scroll.passive="getScroll($event)">
                <div v-for="(item,index) in list" :key="index">
                    <div class="area_item" @click="toTop(index)" ref="doom">{{item.name}}</div>
                </div>                
                <div class="area_item" ref="scrollto">21321</div>
                <div style="width:100%;height:600px;"></div>
            </div>
            <div class="py" @click="testTop"></div>
        </div>
        
        <div class="selcet_area"> 

        </div>
        <div class="selcet_area" style=""> 

        </div>
    </div>
</template>

<script>
import areaList from '@/common/pca-code.json'
export default {
    data () {
        return {
        disabled: false,
        list:[],
        scroll:''
    }
},
    created(){
        this.list = areaList
        console.log(this.list)
    },
    mounted(){
        //  window.addEventListener("scroll", this.test, true);
    },
    methods: {
        getScroll(event){
            let scrollBottom= 
            event.target.scrollHeight -
            event.target.scrollTop -
            event.target.clientHeight;
            // console.log(scrollBottom)
            // console.log(event)
        },
        toTop(index){
            this.$refs.doom[index].scrollIntoView({
                block: 'start',//上对其为start 下对其为end
                behavior: "smooth",
            })
            // let element =this.$refs.doom[index]
            // console.log(element)
            // let height = this.$refs.doom[index].offsetTop; //计算需要向上移动的距离
            // console.log(height)
            // element.scrollTop = 0
            // window.scrollTo({
            //    top: height, //向上移动的距离，如果有fixede布局， 直接减去对应距离即可
            //    behavior: 'smooth', // 平滑移动
            //  });
            // element.offsetTop()
        },
        testTop(){
            this.$refs.doom[0].scrollIntoView({
                 block: 'start',
                 behavior: "smooth"
            })
           
        }
  }
}
</script>

<style lang='scss' scoped>
.container{
    width: 100%;
    .box{
        margin-top: 20px;
        margin-left: 30px;
        width: 300px;
        height: 400px;
        position: relative;
        .selcet_area{        
        // float:left;
        .area_item{
            width: 100%;
            height: 30px;
            border-bottom: 1px solid #EEF1F6;
            line-height: 30px;
            padding-left: 20px;
            cursor: pointer;
            &:hover{
                background: #9FCEFF;
                color: #fff;
            }
        }        
    }
    .py{
            width: 20px;
            height: 280px;
            position: absolute;;
            right: 5px; 
            top:10px;          
            background: #000;
        }
    }
    
    ::-webkit-scrollbar {  //全局修改滚动条
        width: 0px;  
    }
    ::-webkit-scrollbar-track {
        border-radius: 5px;
        background: #000;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(64, 158, 255, 0.5);
    }
}
</style>