import React, { Component } from 'react';
import './NavBar.scss';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onscroll: false
        };
    }



    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 300;
            if (isTop === true) {
                this.setState({ onscroll: false });
                console.log(this.state.onscroll);
            } else {
                this.setState({ onscroll: true });
                console.log(this.state.onscroll);
            }
        });
    }



    render() {
        return (
            <nav className={this.state.onscroll ? "navbar bg-dark scrolled" : "navbar bg-dark"}>

                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}
