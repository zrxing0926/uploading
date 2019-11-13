import React from 'react';
import { Router, Switch } from 'dva/router';
// import IndexPage from './views/IndexPage';

import routes from './routes/router.config'
import RouterView from './routes/routerView'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <RouterView routes={routes.routes}></RouterView>
        {/* <Route path="/" exact component={IndexPage} />
        <Route path="/main/addGov" exact component={IndexPage} />
        <Route path="/main/addPro" exact component={IndexPage} />
        <Route path="/abc/def" exact component={IndexPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
