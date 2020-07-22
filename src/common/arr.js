export default {
    install (Vue, options) {
        //数组去重方法
        //v 是传入进来的数组  i是要去重的依据字段
        Vue.prototype.$changeArr = function(v,i){
            let obj = {}
            let arr1 = v
            let type = i
            // arr1[0][type]
            arr1 = arr1.reduce((cur,next) => {
             let item = next[type]
             obj[item] ? "" : obj[item] = true && cur.push(next);
             return cur;
            },[])
            return arr1 
        }
        Vue.prototype.$Arrup = function(j,k){
            let arr = j
            let index = k
            arr = arr.sort((a,b)=>{ return a[index]-b[index]})
            return arr
        }
        Vue.prototype.$Arrdown = function(m,n){
            let arr = m
            let index = n
            arr = arr.sort((a,b)=>{ return b[index]-a[index]})
            return arr
        }
   }
  }