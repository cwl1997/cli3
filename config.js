let BASE_URL = ""; //这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case "development":
    BASE_URL = ""; //这里是本地的请求
    break;
  case "test":
    BASE_URL = "http://www.xxx.com.cn/test"; // 测试环境
    break;
  case "production":
    BASE_URL = "http://www.xxx.com.cn/"; //生产环境
    break;
}

export default BASE_URL;
