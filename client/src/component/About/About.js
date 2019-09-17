import React, { Component } from 'react';
import './About.scss';
import profile from '../../img/profile.png';

class ProgressBar extends Component{
    render (){
        const {dataskill} = this.props;   
        return(
                <div  className="bar-flex">
                    <div className="bar-fill" style={{ width: dataskill.progress + '%' }}>
                        <div className="tag-bold-flex">
                            {dataskill.name}
                        </div>
                    </div>
                    <span>{dataskill.progress}%</span>

                </div>
            
        )
    }
}

class AboutSkills extends Component{
    render(){
        const skills = this.props.skills;
        return(
            <div className="about-skills">
                {skills.map((skill,index)=>(
                    <ProgressBar key={index} dataskill={skill}/>
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
                name: 'Sass',
                progress: 50
            }
        ]
        return (
            <div id="about" className='about-container  '>
            <div className="aboutintro">
                <h1 className='twoline'>ABOUT ME</h1>
            </div>
            <div className="grid-wrapper">
                    <div className="about-info">
                        <div className="img-wrapper">
                            <a href={profile}>
                                <img src={profile} alt="" className='img-responsive' />
                            </a>
                        </div>
                        <div className="about-text">
                        <h2>Hi, I'm Huy.</h2>
                           
                            <p>I'm a full-stack developer from Finland. I love creating responsive website with cool animations, UI effects and dynamic user experiences. My hobby is going to the gym and playing video games </p>
                        </div>
                    </div>
                    <AboutSkills skills={skillData}/>
                    
            </div>
                
            </div>
        )
    }
}
