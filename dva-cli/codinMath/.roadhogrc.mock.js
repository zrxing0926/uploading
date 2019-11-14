import GovList from './mock/Mock'
export default {
    'GET /api/main/govList':(req,res)=>{
        console.log('res....',res)
        res.send(GovList)
    }
};
