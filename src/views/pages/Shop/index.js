import React, { Component } from 'react'
import { connect } from 'react-redux'

export class index extends Component {
    render() {
        let { addItem } = this.props
        console.log('addItem',addItem)
        return (
            <div className='shop'>
                {
                    addItem.map((item,index)=>{
                        return <div key={index}>
                    <p>{item.title}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state.addItem",state.addItem)
    return {
        addItem:state.addItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

index = connect(mapStateToProps, mapDispatchToProps)(index)
export default index