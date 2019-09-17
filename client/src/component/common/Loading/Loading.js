import React, { Component } from 'react'
import './Loading.scss';

export default class Loading extends Component {
    render() {
        return (
            <div className='loading-container'>
                <div className="loader">Loading...</div>
            </div>
            
        )
    }
}
