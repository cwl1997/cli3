import request from '@/util/http'
//接口文件呢，post请求参数名为params，get请求参数名为data
export function test(data) {
    return request({
        url: 'api/shouji/query',
        method: 'get',
        params:data
    })
}
export function login(data){
    return request({
        url:'api/login',
        method:"post",
        data:data
    })
}
export function loginOut(params) {
    return request({
        url: '/system/login/exit',
        method: 'get',
        params

    })
}