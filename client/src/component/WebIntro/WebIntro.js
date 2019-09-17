import React, { Component } from 'react';
import './WebIntro.scss';
import MilkyWay from '../../video/MilkyWay.mov';



export default class WebIntro extends Component {
    render() {
        return (
            <section id="section1">
                <div className="webintro v-header container">

                    <div className='fullscreen-video-wrap'>
                        <video src={MilkyWay} autoPlay={true} loop={true}></video>

                    </div>
                    <div className="header-overlay"></div>
                    <div className="header-content">
                        <h1>Hi, I'm Huy Truong</h1>
                        <p>I'm a full-stack developer</p>
                        <a href="#" className="btn">See more</a>
                    </div>
                </div>
            </section>

        )
    }
}
