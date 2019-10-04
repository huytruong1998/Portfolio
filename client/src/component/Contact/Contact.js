import React, { Component } from 'react';
import './Contact.scss';
import { sendmail} from '../../actions/mail';
import Loading from '../common/Loading/Loading';
import LazyLoad from 'react-lazyload';
import { Spring } from 'react-spring/renderprops';
import { connect } from 'react-redux';



 class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message: '',
            errors: null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

     componentWillReceiveProps(nextProps) {
         if (nextProps.errors) {
             this.setState({ errors: nextProps.errors });
         }
     }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        this.props.sendmail(userData);
    }
    
    render() {
        const{loading,mail}= this.props.mail;
        const { errors } = this.state;
        
        var mailbtn = 'Send';
        if(loading ){
            mailbtn = 'Loading ...';
        }else{
            mailbtn = 'Send';
        }
        return (
            <div id='contact'>
                <LazyLoad id='contactload'  height={0} offset={[-200, 0]} placeholder={<Loading />} debounce={300}>
                    <div className='contact-contain'>
                        <Spring
                            from={{ top: -100 , opacity: 0 }}
                            to={{ top: 0, opacity: 1 }}
                            
                    >
                            {props => (
                                <div className="contactintro" >
                                    <h1 className='twoline' style={props}>ABOUT</h1>
                                </div>
                            )}
                    </Spring>
                    
                        <div className="contact-for-more">
                            <h3>Want to chat about something?</h3>
                        </div>
                        <form id="contact-form" method="POST" onSubmit={this.onSubmit}>
                            <Spring
                                from={{ left: -500, opacity: 0 }}
                                to={{ left: 0, opacity: 1 }}
                                config={{ duration: 1000 }}
                            >
                                {props => (
                                    <div className="form-group" style={props}>
                                        <input type="text" name="name" className="form-control" onChange={this.onChange} value={this.state.name} id="name" placeholder='Your name here' />
                                        {errors ? <div className="invalid-feedback">{errors.name}</div> : null}
                                    </div>
                                )}
                            </Spring>
                            <Spring
                                from={{ left: 500, opacity: 0 }}
                                to={{ left: 0, opacity: 1 }}
                                config={{ duration: 1000 }}
                            >
                                {props => (
                                    <div className="form-group" style={props}>
                                        <input type="email" name="email" className="form-control" id="email" onChange={this.onChange} value={this.state.email} aria-describedby="emailHelp" placeholder='Your email here' />
                                        {errors ? <div className="invalid-feedback">{errors.email}</div> : null}
                                    </div>
                                )}
                            </Spring>
                            <Spring
                                from={{ left: -500, opacity: 0 }}
                                to={{ left: 0, opacity: 1 }}
                                config={{ duration: 1000 }}
                            >
                                {props => (
                                    <div className="form-group" style={props}>
                                        <textarea className="form-control" name="message" rows="5" id="message" onChange={this.onChange} value={this.state.message} placeholder='Your message here'></textarea>
                                        {errors ? <div className="invalid-feedback">{errors.message}</div> : null}
                                        {mail ? <div className="valid-feedback">{mail.success}</div> : null}

                                    </div>
                                )}
                            </Spring>
                            <Spring
                                from={{ left: 500, opacity: 0 }}
                                to={{ left: 0, opacity: 1 }}
                                config={{ duration: 1000 }}
                            >
                                {props => (
                                    <button type="submit" style={props} className="btn">{mailbtn}</button>
                                )}
                            </Spring>
                                
                            
                            
                        </form>
                        <div className="contact-icon">
                            <ul className='list-inline list-social'>
                                <Spring
                                    from={{ opacity: 0, transform: 'scale(0.5)' }}
                                    to={{ opacity: 1, transform: 'scale(1)' }}
                                    config={{ duration: 200 }}
                                    delay={ 200}>
                                    {props => (
                                        <li><a style={props} href="https://www.facebook.com/truongquang.huy.165"><i className="fab fa-facebook-f"></i></a></li>
                                    )}
                                    </Spring>
                                    
                                <Spring
                                    from={{ opacity: 0, transform: 'scale(0.5)' }}
                                    to={{ opacity: 1, transform: 'scale(1)' }}
                                    config={{ duration: 200 }}
                                    delay={400}>
                                    {props => (
                                        <li><a style={props} href="https://www.linkedin.com/in/huy-truong-428850174/"><i className="fab fa-linkedin-in"></i></a></li>
                                    )}
                                </Spring>
                                <Spring
                                    from={{ opacity: 0, transform: 'scale(0.5)' }}
                                    to={{ opacity: 1, transform: 'scale(1)' }}
                                    config={{ duration: 200 }}
                                    delay={600}>
                                    {props => (
                                        <li><a style={props} href="https://github.com/huy9903098"><i className="fab fa-github"></i></a></li>
                                    )}
                                </Spring>
                                
                               
                            </ul>
                        </div>
                        <div className='footnote'>
                            <p>TRUONG QUANG HUY <span className='hightlight'>©2019</span></p>
                        </div>
                    </div>
                </LazyLoad>
                
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    mail: state.mail,
    errors: state.errors
});

export default connect(mapStateToProps, { sendmail })(Contact);
