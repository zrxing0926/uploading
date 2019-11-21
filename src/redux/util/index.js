import mock from '../../mock/mock.js'

function RequestProp(url){
    return new Promise(res=>{
        res(mock[url]())
    })
}

export default RequestProp