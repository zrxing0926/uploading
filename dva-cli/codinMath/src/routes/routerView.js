import React from 'react'
import { Route, Switch, Redirect } from 'dva/router';

export default props => {
  return <Switch>{
    props.routes.map((item, index) => {
      return item.path && <Route key={index} path={item.path} render={(props) => {
        if (item.redirect) {
          return <Redirect exact from={item.path} to={item.redirect} />
        }
        if (item.children) {
          return <item.component {...props} routes={item.children} />
        } else {
          return <item.component {...props} />
        }
      }
      } />
    })
  }</Switch>
}
