import mockdata from './data.json'
import Mock from 'mockjs'

//用户信息
let logindata =[
    {
        user:'123',
        pwd:'123'
    }
]

//评论数据接口
Mock.mock(/\/api\/data/,'get',function(option){
    console.log(mockdata)
    let data =mockdata
    return data
})

//登录接口
Mock.mock(/\/api\/login/,'get',function(option){
    return logindata
})