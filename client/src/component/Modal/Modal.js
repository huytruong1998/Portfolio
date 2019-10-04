import React from 'react';
import './Modal.scss';

const modal = ({
    CloseHandler,
    descinfo
}) =>{
    return(
        (
            <div className="modal" >
                <div className="modal-content">
                    <div className="close-container" onClick={CloseHandler}>
                        <div className="leftright"></div>
                        <div className="rightleft"></div>
                        <label className="close" >Close</label>
                    </div>
                    <div className="project-info">
                    <div className="project-intro">
                            <h1>{descinfo.name}</h1>
                            <h2>{descinfo.header}</h2>
                            <div className="website-link">
                                <a href={descinfo.gitHub}>Github</a>
                                {descinfo.link?<a href={descinfo.link}>Link</a>:null}
                                
                            </div>
                    </div>
                        
                        <div className="project-desc">
                            <h2>Front end: {descinfo.frontend}</h2>
                            {descinfo.backend?<h2>Back end: {descinfo.backend}</h2>:null}
                            <p><b>{descinfo.mobile}</b> </p>
                            <p>{descinfo.info}</p>
                        </div>
                        <div className="project-img">
                            {descinfo.gallery.map((img,index)=>(
                                <img alt='' src={img} key={index} ></img>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    )
}

export default modal;