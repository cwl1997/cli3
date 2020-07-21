import request from '@/util/http'
//接口文件呢，post请求参数名为data，get请求参数名为params
export function login(data) {
    return request({
        url: 'api/person',
        method: 'get',
        params:data
    })
}

export function loginOut(params) {
    return request({
        url: '/system/login/exit',
        method: 'get',
        params

    })
}