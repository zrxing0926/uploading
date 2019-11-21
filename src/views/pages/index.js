import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MapRoute from '../../router//MapRoute'

import '../scss/stle.css'

export default class index extends Component {
    state = {
        footer_link: [
            {
                path: '/home',
                foot: '配送到家'
            }, {
                path: '/classify',
                foot: '分类'
            }, {
                path: '/member',
                foot: '会员'
            }, {
                path: '/shop',
                foot: '购物车'
            }, {
                path: '/my',
                foot: '我的'
            }
        ],
        footer_link_key: 0
    }

    footClick(index) {
        let { footer_link_key } = this.state
        footer_link_key = index

        this.setState({
            footer_link_key
        })
    }
    render() {

        let { footer_link, footer_link_key } = this.state
        return (
            <div className='router'>
                <div className='wrap'>
                    <MapRoute route={this.props.route}></MapRoute>
                </div>

                <nav className='footer'>
                    {
                        footer_link.map((item, index) => {
                            return <div key={index} onClick={() => { this.footClick(index) }} className={footer_link_key === index ? 'active' : ''}>
                                <NavLink to={item.path}>{item.foot}</NavLink>
                            </div>
                        })
                    }
                </nav>
            </div>
        )
    }
}
