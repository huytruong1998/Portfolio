import React, { Component } from 'react';
import './About.scss';
import profile from '../../img/profile.png';
import LazyLoad from 'react-lazyload';
import Loading from '../common/Loading/Loading';
import { Spring } from 'react-spring/renderprops';
import CountUp from 'react-countup';
class ProgressBar extends Component{
    
    render (){
        const {dataskill,number} = this.props;
         
            return (
                <Spring
                    from={{ opacity: 0, top: -30}}
                    to={{ opacity: 1, top: 0}}
                    delay={number*100}>
                    {props => (
                        <div className="bar-flex" style={props}>
                        <div className="tag-bold-flex">
                            {dataskill.name}
                        </div>
                        <Spring
                            from={{ width: '0%' }}
                            to={{ width: dataskill.progress + '%' }}
                            delay={number * 200 }
                        >
                            {props => (
                                <div className="bar-fill" style={props}>

                                </div>
                            )}
                        </Spring>
                            <span className='show-percentage-skill'><CountUp delay={number*0.2 +1 }  end={dataskill.progress} />%</span>
                    </div>
                    )}
                </Spring>
                

            )
    }
}

class AboutSkills extends Component{
    render(){
        const skills = this.props.skills;
        return(
           
                <div className="about-skills">
                
                    {skills.map((skill, index) => (
                        <ProgressBar key={index} number={index} dataskill={skill} />
                    ))}
                </div>
            
            
        )
    }
}

export default class About extends Component {
    render() {

        const skillData =[
            {
                name:'HTML',
                progress: 75
            },
            {
                name: 'CSS',
                progress: 65
            },
            {
                name: 'Javascript',
                progress: 75
            },
            {
                name: 'React',
                progress: 80
            },
            {
                name: 'Nodejs',
                progress: 60
            },
            {
                name: 'MongoDB',
                progress: 60
            },
            {
                name: 'Postgresql',
                progress: 50
            },
            {
                name: 'Sass',
                progress: 40
            }
        ]
        return (
            <div id="about" >
                <LazyLoad id='aboutload' height={0} offset={[-200, 0]} placeholder={<Loading />} debounce={300}>
                    <div className='about-container  '>
                    <Spring
                            from={{ top: -100 , opacity: 0 }}
                            to={{ top: 0, opacity: 1 }}
                    >
                            {props => (
                                <div className="aboutintro" >
                                    <h1 className='twoline' style={props}>ABOUT</h1>
                                </div>
                            )}
                    </Spring>
                        
                        <div className="grid-wrapper">
                            <div className="about-info">
                                <Spring
                                    from={{ transform: 'scale(0.5)', opacity: 0  }}
                                    to={{ transform: 'scale(1)', opacity: 1 }}
                                    config={{ duration: 1000 }}
                                >
                                    {props => (
                                        <div className="img-wrapper">
                                            <a href={profile}>
                                                <img src={profile} alt="" className='img-responsive' style={props} />
                                            </a>
                                        </div>
                                    )}
                                </Spring>
                                <Spring
                                    from={{ opacity: 0 }}
                                    to={{  opacity: 1 }}
                                    config={{ duration: 500 }}
                                >
                                    {props => (
                                        <div className="about-text" style={props}>
                                            <h2>Hi, I'm Huy.</h2>

                                            <p>I'm a full-stack developer from Finland. I love creating responsive website with cool animations, UI effects and dynamic user experiences. My hobby is going to the gym and playing video games </p>
                                        </div>
                                    )}
                                </Spring>
                                    
                                
                            </div>
                            <AboutSkills skills={skillData} />

                        </div>
                    </div>
                </LazyLoad>
                
            </div>
           
        )
    }
}
