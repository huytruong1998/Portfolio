import React, { Component } from 'react';
import './NavBar.scss';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">

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
