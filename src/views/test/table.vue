<template>
    <div>
        <div>
            <el-button type="primary" @click="test">新增</el-button>
             <el-button type="primary" @click="test">保存</el-button>
        </div>
        <div>
            <el-table  :data="tableData"  style="width: 100%" @row-click="changedate" :row-class-name="tableRowClassName">
                <el-table-column label="日期" width="180">
                    <template slot-scope="scope" >
                        <span v-if="scope.row.state!==0">{{scope.row.date}}</span>
                        <div v-if="scope.row.state==0">
                             <div class="block" >
                                <el-date-picker                                
                                v-model="scope.row.date"
                                style="width:100%"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column  label="姓名" width="180">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state!==0">{{scope.row.name}}</span>
                        <div v-if="scope.row.state==0">
                            <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="地址">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state!==0">{{scope.row.address}}</span>
                        <div v-if="scope.row.state==0">
                            <el-select v-model="scope.row.address" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                                </el-option>
                             </el-select>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
       
    </div>
</template>

<script>
export default {
    data () {
        return {
        tableData:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            state:1
          },{date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄',state:1}],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
    }
},
    created () {
        
},
    methods: {
        test(){
            this.tableData.push({
            date:'',
            name:'',
            address:'',
            state:0
        })
        },
         tableRowClassName({row,rowIndex}){
        //把每一行的索引放进row
            row.index = rowIndex;
        },
        changedate(v,i,m){
           v.state = 0
            // console.log(v)
            // console.log(i)
            // console.log(m)
        }
  }
}
</script>

<style lang='scss' scoped>
</style>