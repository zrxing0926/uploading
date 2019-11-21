import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import MapRoute from '../../../router/MapRoute'

export default class index extends Component {
    render() {
        return (
            <div className='home'>
                <nav className='home_header'>
                    <div>
                        <NavLink to="/home/super">多点超市</NavLink>
                    </div>
                    <div>
                        <NavLink to='/home/xuan'>全球精选</NavLink>
                    </div>
                </nav>

                <div className="pageItem">
                    <MapRoute route={this.props.route}></MapRoute>
                </div>
            </div>
        )
    }
}
