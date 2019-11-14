import React from 'react';
import { Router } from 'dva/router';

import routes from './router.config';
import RouterView from './RouterView';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={routes.routes}/>
      {/* <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/main/addGov" exact component={IndexPage} />
        <Route path="/main/addPro" exact component={IndexPage} />

        <Route path="/abc/def" exact component={IndexPage} />
      </Switch> */}
    </Router>
  );
}

export default RouterConfig;
