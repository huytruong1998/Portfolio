import React, { Component } from 'react';
import './About.scss';

export default class About extends Component {
    render() {
        return (
            <div className='about-container grid-wrapper '>
                <div className="about-info">
                    Character
                </div>
                <div className="about-skills">
                    Skills
                </div>
            </div>
        )
    }
}
