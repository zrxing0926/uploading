import GovList from './mock/Mock'

export default {
    'GET /api/main/govList':(req,res)=>{
        console.log('res....',GovList)
        res.send(GovList)
    }
};
