import React, { Component } from 'react';
import './WebIntro.scss';
import MilkyWay from '../../video/MilkyWay.mov';
import { Link } from 'react-scroll';
import LazyLoad from 'react-lazyload';

export default class WebIntro extends Component {
    render() {
        return (
            <div id='home'>
                <LazyLoad id='projectload' height={0} offset={[-200, 0]} placeholder={<Loading />} debounce={300}>
                    <div className="webintro v-header container">

                        <div className='fullscreen-video-wrap'>
                            <video src={MilkyWay} autoPlay={true} loop={true}></video>

                        </div>
                        <div className="header-overlay"></div>
                        <div className="header-content">
                            <h1 style={{ fontSize: '65px', letterSpacing: '5px', fontWeight: 'bold' }}> HUY TRUONG</h1>
                            <p>I'm a full-stack developer from Finland</p>
                            <Link
                                activeClass="active"
                                to="about" spy={true}
                                smooth={true} offset={0}
                                duration={500}
                            >
                                <div className="button">
                                    <div className="text">See more</div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </LazyLoad>
                    
               
            </div>
                
        )
    }
}
