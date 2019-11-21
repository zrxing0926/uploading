
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'

const MapRoute = props => (
    <Switch>
        {props.route.map(item =>
            item.path ? (
                <Route
                    path={item.path}
                    key={item.path}
                    render={props => <item.component {...props} route={item.children} />}
                />
            ) : (
                    <Redirect {...item} key={item.from} />
                )
        )}
    </Switch>

)

export default MapRoute












// import React, { Component } from 'react'
// import {Switch,Route,Redirect} from 'react-router-dom'
// import routes from './router.config.js'

// export default class Router extends Component {
//     render() {
//         let routeArr = routes.filter(item=>{
//             return item.component
//         })
//         let redirectArr = routes.filter(item=>{
//             return item.redirect
//         })
//         return (
//             <Switch>
//                 {
//                     routeArr.map(item=>{
//                         return <Route key={item.path} path={item.path} render={
//                             (props)=>{
//                                 return <item.component {...props} children={item.children}></item.component>
//                             }
//                         }></Route>
//                     }).concat(redirectArr.map(item=>{
//                         return <Redirect key={item.path} from={item.path} to={item.redirect}></Redirect>
//                     }))
//                 }
//             </Switch>
//         )
//     }
// }


















