import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'dva/router';

import routes from '@/routes/router.config.js';

const { SubMenu } = Menu;

function createMenu(ary){
  return ary.map((item, index)=>{
    if (item.path){
      return item.show && <Menu.Item key={item.path}>
        <NavLink to={item.path}>{item.title}</NavLink>
      </Menu.Item>
    }else{
      return <SubMenu
        key={item.title}
        title={
          <span>
            <Icon type="mail" />
            <span>{item.title}</span>
          </span>
        }>{createMenu(item.children)
      }</SubMenu>
    }
  })
}

class MyMenu extends React.Component{
  render(){
    let {path} = this.props.match;
    return  <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={[path]}
        defaultOpenKeys={[routes.routes[0].title]}
        mode="inline"
      >{
        createMenu(routes.routes)
      }</Menu>
  }
}

export default withRouter(MyMenu);
