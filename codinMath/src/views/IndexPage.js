import React from 'react';
import { connect } from 'dva';
import { Layout, Breadcrumb } from 'antd';
import styles from './IndexPage.scss';

import MyMenu from '@/components/MyMenu';
import RouterView from '@/routes/RouterView'

const { Header, Content, Sider } = Layout;


class IndexPage extends React.Component {
  render() {
    return (
      <Layout className={styles.wrap}>
        <Header className="header">
          头部
        </Header>
        <Layout className={styles.container}>
          <Sider width={200} className={styles.sider}>
            <MyMenu />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className={styles.content}
              // style={{
              //   background: '#fff',
              //   padding: 24,
              //   margin: 0,
              //   minHeight: 280,
              // }}
            >
              {/* <p className='sider content'>Content</p> */}

              <RouterView routes={this.props.routes} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(IndexPage);











// import React from 'react';
// import { connect } from 'dva';
// import styles from './IndexPages.css';

// class IndexPage extends React.Component{
//   btnClick(e){
//     console.log('e...', e, this);
//   }

//   render(){
//     let {changeNum} = this.props;
//     console.log('props...', this.props);

//     return (
//       <div className={styles.normal}>
//         <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//         <div>
//           <button onClick={()=>changeNum('+')}>+</button>
//           <span>{this.props.num}</span>
//           <button onClick={()=>changeNum('-')}>-</button>
//         </div>
//       </div>
//     );
//   }
// }

// IndexPage.propTypes = {
//   num: Number
// };

// IndexPage.defaultProps = {
//   num: 1000
// }

// const mapStateToPorps = state=>{
//   console.log('state...', state);
//   return {
//     num: state.num.num
//   }
// }

// const mapDispatchToProps = dispatch=>{
//   return {
//     changeNum: type=>dispatch({
//       type: 'num/changeNum',
//       payload: {type}
//     })
//   }
// }

// export default connect(mapStateToPorps, mapDispatchToProps)(IndexPage);