
const hackSign = require("./algos/hack_sign");
const hackEncryptPassword = require("./algos/hack_encrypt_password");
const axios = require("axios");
const hackAntiContentFromCookie = require("./algos/hack_anti-content_from_cookie");
const url = 'https://xg.pinduoduo.com/xg/pfb/a2'

const username = "乐和食品店:冯露";
const password = "Fl123456...";
const cookie = 'api_uid=rBS0oWCOHXUuNUUBHt7KAg=='
const antiContent = hackAntiContentFromCookie(cookie)
const ts = new Date().getTime()
const data = {
    "data": antiContent,
    "timestamp": ts,
    "appKey": "fe",
    "sign": hackSign(username, hackEncryptPassword(password), ts)
}
console.log(data)

axios.post(url, data, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
        'Cookie': cookie,
        'Referer': 'https://mms.pinduoduo.com/',
        'Content-Type': 'application/json'
    }
}).then(e => {
    console.log(e.data)
})