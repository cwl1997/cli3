import CryptoJS from 'crypto-js';
 
export default {
    //加密
    encrypt(word, keyStr) {
        // keyStr = keyStr ? keyStr : 'abcdsxyzhkj12345'; //判断是否存在ksy，不存在就用定义好的key
        keyStr = [86, 50, 107, 118, 104, 51, 118, 112, 76, 108, 79, 119, 75, 72, 50, 53, 49, 47, 76, 52, 74, 82, 79, 86, 122, 52, 43, 78, 84, 47, 89, 83, 119, 88, 101, 86, 117, 87, 57, 108, 122, 120, 107, 61]
        var key = CryptoJS.enc.Utf8.parse(keyStr);
        var srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, keyStr, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.toString();
    },
    //解密
    decrypt(word, keyStr) {
        // keyStr = keyStr ? keyStr : 'abcdsxyzhkj12345';
        var keys = 'V2kvh3vpLlOwKH251/L4JROVz4+NT/YSwXeVuW9lzxk='    
        // let res = CryptoJS.enc.Base64.parse(word).toString(CryptoJS.enc.Utf8);
        let base64 = CryptoJS.enc.Base64.parse(word)
        let src = CryptoJS.enc.Base64.stringify(base64)
        var key = CryptoJS.enc.Utf8.parse(keys);        
        var decrypt = CryptoJS.AES.decrypt(src,key,{
            mode:CryptoJS.mode.ECB,
            padding:CryptoJS.pad.Pkcs7
        })
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    } 
}