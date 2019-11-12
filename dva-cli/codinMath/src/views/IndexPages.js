import React from 'react';
import { connect } from 'dva';
import styles from './IndexPages.css';

class IndexPage extends React.Component{
  btnClick(e){
    console.log('e...', e, this);
  }

  render(){
    let {changeNum} = this.props;
    console.log('props...', this.props);

    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div>
          <button onClick={()=>changeNum('+')}>+</button>
          <span>{this.props.num}</span>
          <button onClick={()=>changeNum('-')}>-</button>
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
  num: Number
};

IndexPage.defaultProps = {
  num: 1000
}

const mapStateToPorps = state=>{
  console.log('state...', state);
  return {
    num: state.num.num
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    changeNum: type=>dispatch({
      type: 'num/changeNum',
      payload: {type}
    })
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(IndexPage);
