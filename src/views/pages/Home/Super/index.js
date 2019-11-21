import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RequestProp from '../../../../redux/util/index.js'

export class index extends Component {

    componentDidMount() {
        this.props.getList()
    }

    itemClick(item) {
        this.props.history.push(`/defatil/${item.id}`, item)
    }

    itemShop(e,item) {
        e.stopPropagation();

        this.props.addItem(item)
    }

    render() {
        let { shoplist } = this.props
        return (
            <div className='super'>
                {
                    shoplist.map((item, index) => {
                        return <div key={index} onClick={() => { this.itemClick(item) }}>
                            <img src={item.img} alt='' />
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                            <button onClick={(e) => { this.itemShop(e,item) }}>+ </button>
                        </div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoplist:state.shoplist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList() {
            RequestProp('/list/data').then(data => {
                dispatch({ type: 'SHOPLIST', shoplist: data })
            })
        },
        addItem(items){
            // console.log('items',items)
            dispatch({type:'ADDITEM',addItem:items})
        }
    }
}

index = connect(mapStateToProps, mapDispatchToProps)(index)

export default withRouter(index)