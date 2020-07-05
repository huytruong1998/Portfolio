import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { Spring } from "react-spring/renderprops";
import devrforum from "../../img/devforum.jpg";
import devrforum1 from "../../img/devforum1.PNG";
import devrforum2 from "../../img/devforum2.PNG";
import devrforum3 from "../../img/devforum3.PNG";
import fitapp from "../../img/fitapp.jpg";
import fitapp2 from "../../img/fitapp2.PNG";
import fitapp3 from "../../img/fitapp3.PNG";
import fitapp4 from "../../img/fitapp4.PNG";
import ShopMe from "../../img/ShopMe.jpg";
import ShopMe2 from "../../img/ShopMe2.PNG";
import ShopMe3 from "../../img/ShopMe3.PNG";
import ShopMe4 from "../../img/ShopMe4.PNG";
import spartan from "../../img/spartan.jpg";
import todolist from "../../img/todolist.PNG";
import todolist2 from "../../img/todolist2.PNG";
import workaround from "../../img/workaround.jpg";
import workaround2 from "../../img/workaround2.jpg";
import workaround3 from "../../img/workaround3.jpg";
import workaround4 from "../../img/workaround4.jpg";
import Loading from "../common/Loading/Loading";
import Modal from "../Modal/Modal";
import "./Project.scss";

export default class Project extends Component {
  state = {
    openmodal: false,
    projectinfo: null,
  };

  OpenHandler = (info) => {
    this.setState({ openmodal: true });
    this.setState({ projectinfo: info });
  };

  CloseHandler = () => {
    this.setState({ openmodal: false });
    this.setState({ projectinfo: null });
  };
  render() {
    const infoData = [
      {
        name: "DevForum",
        header: "A Forum for Developer",
        desc: "React + Redux + MongoDB + Nodejs",
        info:
          "This a developer forum were developer can create post, share opinions and interact with each other",
        frontend: "React +Redux",
        backend: " Nodejs + Express + MongoDB",
        gitHub: "https://github.com/huy9903098/DevForum",
        link: "https://radiant-hollows-68283.herokuapp.com/",
        img: devrforum,
        gallery: [devrforum1, devrforum2, devrforum3],
      },
      {
        name: "ShopMe",
        header: "A shopping website for store",
        desc: "React + Redux + Postgresql + Nodejs",
        info:
          "This a store website, the admin can manage the website and see customer order",
        frontend: "React +Redux",
        backend: " Nodejs + Express + Postgresql",
        gitHub: "https://github.com/huy9903098/ProjStudie",
        link: "https://shoppingapp234.herokuapp.com/",
        img: ShopMe,
        gallery: [ShopMe2, ShopMe3, ShopMe4],
      },
      {
        name: "Spartan",
        header: "website with some cool design",
        desc: "React + HTML + Bootstrap + CSS + SCSS",
        frontend: "React + HTML +Bootstrap+ CSS + SCSS",
        gitHub: "https://github.com/huy9903098/highend",
        link: "https://spartan678.herokuapp.com/",
        img: spartan,
        gallery: [spartan],
      },
      {
        name: "Fit App",
        header: "A fitness website",
        frontend: "React +Redux",
        info:
          "This is a fitness website for people to calculate calories based on consumption and workout",
        backend: " Nodejs + Express + MongoDB",
        desc: "React + Redux + MongoDB + Nodejs",
        gitHub: "https://github.com/huy9903098/frStudie",
        link: "https://calm-waters-76421.herokuapp.com/",
        img: fitapp,
        gallery: [fitapp2, fitapp3, fitapp4],
      },
      {
        name: "WorkAround",
        header: "A job finding and hirin app",
        info:
          "This is an app that connect people who need job and those who want a problem solve. In this app, I work in a group and I handle the Notification and MyJob and the authentication process",
        desc: "Ionic + Angular + Typescript + Firebase",
        frontend: "Ionic +Angular + Typescript",
        gitHub: "https://github.com/fayjusss/work-around",
        backend: "Firebase",
        img: workaround,
        gallery: [workaround2, workaround3, workaround4],
        mobile: "Download Ionic View and to view the app enter code: 92df680f",
      },
      {
        name: "Job Management",
        header: "A job management list",
        frontend: "React +Redux",
        info: "Create a list of job to do",
        desc: "React + Redux + localStorage",
        gitHub: "https://github.com/huy9903098/todolist",
        link: "https://todolist990.herokuapp.com/",
        img: todolist,
        gallery: [todolist2],
      },
    ];
    return (
      <div id="project">
        <LazyLoad
          id="projectload"
          height={0}
          offset={[-200, 0]}
          placeholder={<Loading />}
          debounce={300}
        >
          <div className="project-contain">
            <Spring
              from={{ top: -100, opacity: 0 }}
              to={{ top: 0, opacity: 1 }}
            >
              {(props) => (
                <div className="aboutintro">
                  <h1 className="twoline" style={props}>
                    PROJECT
                  </h1>
                </div>
              )}
            </Spring>
            <div className="content-box">
              <div className="project-box">
                {infoData.map((info, index) => (
                  <ProjectItem
                    key={index}
                    number={index}
                    openmodal={this.state.openmodal}
                    OpenHandler={() => this.OpenHandler(info)}
                    dataskill={info}
                    descinfo={this.state.projectinfo}
                    CloseHandler={this.CloseHandler}
                  />
                ))}
              </div>
            </div>
          </div>
        </LazyLoad>
      </div>
    );
  }
}

class ProjectItem extends Component {
  render() {
    const {
      dataskill,
      descinfo,
      openmodal,
      OpenHandler,
      CloseHandler,
      number,
    } = this.props;
    return (
      <React.Fragment>
        {openmodal ? (
          <Modal CloseHandler={CloseHandler} descinfo={descinfo} />
        ) : null}
        <Spring
          from={{ opacity: 0, transform: "scale(0.5)" }}
          to={{ opacity: 1, transform: "scale(1)" }}
          config={{ duration: 500 }}
          delay={number * 200}
        >
          {(props) => (
            <div className="projectobject" style={props}>
              <div
                className="imgdisplay"
                style={{ backgroundImage: "url(" + dataskill.img + ")" }}
              ></div>
              <div className="show-desc">
                <h1 className="project-title">{dataskill.name}</h1>
                <p>{dataskill.desc}</p>

                <button onClick={OpenHandler} className="btn">
                  View More
                </button>
              </div>
            </div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
}
