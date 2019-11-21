import React, { Component } from 'react'
import '../scss/stle.css'

export default class defatil extends Component {
    state = {
        item: this.props.location.state
    }
    render() {
        let { item } = this.state
        console.log('item', item)
        return (
            <div className='defatil'>
                <img src={item.img} alt='' />
                <h3>{item.title}</h3>
                <p>{item.price}</p>


                <div>加入购物车</div>
            </div>
        )
    }
}
