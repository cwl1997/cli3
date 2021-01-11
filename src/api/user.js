import request from "@/util/http";
//接口文件呢，post请求参数名为params，get请求参数名为data
export function test(data) {
  return request({
    // url: 'api/shouji/query',
    url: "api/encryption",
    method: "post",
    data: data
  });
}
export function login(data) {
  return request({
    url: "api/login",
    method: "post",
    data: data
  });
}
export function testRe(data) {
  return request({
    url: "/api/person",
    method: "get",
    params: data
  });
}
export function testlj(data) {
  return request({
    url: "/api/download.do",
    method: "get",
    params: data
  });
}
