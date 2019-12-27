const Mock = require('mockjs')

// Mock.mock('/user/userInfo', 'get', require('./json/userInfo'))

const Random = Mock.Random
const arrlist = Random.cname()
console.log(arrlist);
const JsonObj = require('./json/userInfo')
JsonObj.Cname = arrlist
Mock.mock('/user/userInfo', 'get', JsonObj)
// 往对象里面加一个随机出现的中文名 这里没用到

// const util = require('./util')
// module.exports = function (app) {
//   // 监听请求
//   app.get('/api/index', (rep, res) => {
//     // 响应时,返回mock data的json数据
//     const articleList = util.getJsonFile('./index.json')
//     // 将json传入 Mock.mock方法中,生成的数据返回给浏览器
//     res.json(Mock.mock(articleList))
//   })
// }
