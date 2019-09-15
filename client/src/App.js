import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './component/Navbar/NavBar';
import WebIntro from './component/WebIntro/WebIntro';
import About from './component/About/About';

function App() {
  return (
    <Fragment>
      <NavBar />
      <WebIntro />
      <About />
    </Fragment>
  );
}

export default App;
