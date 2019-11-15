import GovList from './mock/Mock'

export default {
    'GET /api/main/govList':(req,res)=>{
        console.log('res....',GovList)
        res.send(GovList)
    },

    'POST /api/main/addGov': (req,res)=>{
        GovList.list.ush({
            id:GovList.list.length + 1,
            ...req.body
        });
        res.send({
            code: 1,
            msg: '添加机构成功'
        })
    }
};
