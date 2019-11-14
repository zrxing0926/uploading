import Mock from 'mockjs'

let govList = Mock.mock({
    "list|300": [{
        "id|+1": 1,
        "name": "@url",
        "area": "@city(true)",
        "master": "@cname",
        "phone|1000000000-1999999999": 1,
        "enable|1-2": true
    }]
})
export default govList;