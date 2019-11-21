import Home from '../views/pages/Home'
import Pages from '../views/pages'
import Class from '../views/pages/Class'
import Member from '../views/pages/Member'
import Shop from '../views/pages/Shop'
import My from '../views/pages/My'
import Super from '../views/pages//Home/Super'
import Xuan from '../views/pages/Home/Xuan'

import Defatil from '../views/pages/defatil'

const route = [
    {
        path: '/defatil',
        component: Defatil,
    },
    {
        path: '/',
        component: Pages,
        children: [
            {
                path: '/home',
                component: Home,
                children: [
                    {
                        path: '/home/super',
                        component: Super
                    }, {
                        path: '/home/xuan',
                        component: Xuan
                    }, {
                        from: '/home',
                        to: '/home/super'
                    }
                ]
            }, {
                path: '/classify',
                component: Class
            },{
                path: '/member',
                component: Member
               
            }, {
                path: '/shop',
                component: Shop
            }, {
                path: '/my',
                component: My
            }, {
                from: '/',
                to: '/home'
            }
        ]
    }
]

export default route