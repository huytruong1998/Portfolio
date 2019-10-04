import React, { Component } from 'react';
import './ProjectIntro.scss';

export default class ProjectIntro extends Component {
    render() {
        const{title}= this.props;
        return (
            <div className="projectintro">
                <h1 className='twoline'>{title}</h1>
            </div>
        )
    }
}
