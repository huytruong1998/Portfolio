import React, { Component } from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onscroll: false,
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 150;
      if (isTop === true) {
        this.setState({ onscroll: false });
      } else {
        this.setState({ onscroll: true });
      }
    });
  }

  render() {
    return (
      <nav
        id="navbar"
        className={
          this.state.onscroll ? "navbar bg-dark scrolled" : "navbar bg-dark"
        }
      >
        <ul>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              EXPERIENCE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
