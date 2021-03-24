import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Spring } from 'react-spring/renderprops';
import coccon from '../../img/coccon.svg';
import mailbutler from '../../img/MB_Logo.jpg';
import softagram from '../../img/sg-logo.png';
import smilee from '../../img/smilee.png';
import Loading from '../common/Loading/Loading';
import './Experience.scss';

export default class Experience extends Component {
  render() {
    const infoData = [
      {
        company: coccon,
        position: 'Web Developer',
        location: 'Ho Chi Minh, VietNam',
        responsibility: [
          `Work in production environment projects for both Frontend and backend.`,
          `Front-end used React.js, Redux and Apollo as state management. Implement new design, feature, fixing bugs and clean code `,
          `Backend work with Node.js, Express and GraphQL. Implement new query and mutation, create new source code repo for IAC's REST service`,
        ],
        duration: '08/2020 - present',
        contactPerson: 'Nguyễn Phương Duy',
        contactPersonInfo: 'duyn@princeton.edu',
      },
      {
        company: mailbutler,
        position: 'Intern',
        location: 'Berlin, Germany',
        responsibility: [
          `Work in production environment projects has outlook add-ins, chrome extension for Gmail, SPA dashboard and mobile applications.`,
          `Front-end mainly used Vue.js, Typescript as compiler language, SASS as scripting language and basic HTML.`,
          `Work with Cordova for IOS/Android mobile application`,
          `Write E2E and Unit test with Jest and Puppeteer across all projects`,
        ],
        duration: '02/2020 - 08/2020',
        contactPerson: 'Fabian Jäger',
        contactPersonInfo: 'info@mailbutler.io',
      },
      {
        company: smilee,
        position: 'Trainee',
        location: 'Oulu, Finland',
        responsibility: [
          `Small but growing company. Mainly work with React Redux, SASS is used as compiler. First contact with GraphQL and how it implemented with the project. `,
          `Implement new design, feature and fixing bugs`,
        ],
        duration: '11/2019 - 01/2020',
        contactPerson: 'Jesse Lumme',
        contactPersonInfo: 'jesse.lumme@smilee.io',
      },
      {
        company: softagram,
        position: 'Trainee',
        location: 'Oulu, Finland',
        responsibility: [
          `Work in a small team of developer. SPA front-end development.Work front-end using React as Framework and Redux as state container. `,
          `Implement new design, feature and fixing bugs`,
        ],
        duration: '03/2019 - 04/2019',
        contactPerson: 'Tommi Tallagren',
        contactPersonInfo: 'tommi.tallgren@softagram.com',
      },
    ];
    return (
      <div id="experience">
        <LazyLoad
          id="experienceload"
          height={0}
          offset={[-200, 0]}
          placeholder={<Loading />}
          debounce={300}
        >
          <div className="experience-container">
            <Spring
              from={{ top: -100, opacity: 0 }}
              to={{ top: 0, opacity: 1 }}
            >
              {(props) => (
                <div className="aboutintro">
                  <h1 className="twoline" style={props}>
                    EXPERIENCE
                  </h1>
                </div>
              )}
            </Spring>
            <div className="content-box">
              <div className="experience-box">
                {infoData.map((info, index) => (
                  <ExperienceItem key={index} number={index} dataskill={info} />
                ))}
              </div>
            </div>
          </div>
        </LazyLoad>
      </div>
    );
  }
}

class ExperienceItem extends Component {
  render() {
    const { dataskill, number } = this.props;
    return (
      <React.Fragment>
        <Spring
          from={{ opacity: 0, transform: 'scale(0.5)' }}
          to={{ opacity: 1, transform: 'scale(1)' }}
          config={{ duration: 500 }}
          delay={number * 200}
        >
          {(props) => (
            <div className="experience-card" style={props}>
              <div className="experience-header">
                <span class="alignleft">
                  <img
                    src={dataskill.company}
                    style={{ maxHeight: '1.75em', maxWidth: '8.5em' }}
                    alt=""
                  />
                </span>
                <span class="alignright">{dataskill.duration}</span>
              </div>

              <div className="line-sperators"></div>
              <p>Position: {dataskill.position}</p>
              <p className="qualification-title">
                Qualification / Responsibility
              </p>
              <div className="experience-qualification">
                <ul>
                  {dataskill.responsibility.map((responsibility) => (
                    <li>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <p>
                <span style={{ fontWeight: 'bold' }}>Contact person: </span>
                {dataskill.contactPerson} - {dataskill.contactPersonInfo}
              </p>
            </div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
}
