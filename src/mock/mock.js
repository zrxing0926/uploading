import mockdata from './data.json'

let mock = {
  '/list/data'() {
    return mockdata
  }
}

export default mock

















// import Mock from 'mockjs';

// let shopList = Mock.mock({
//   "list|300": [{
//     "id|+1": 1,
//     "name": "@url",
//     "area": "@city(true)",
//     "master": "@cname",
//     "phone|10000000000-19999999999": 1,
//     "enable|1-2": true
//   }]
// })


// export default shopList;
