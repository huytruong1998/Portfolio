import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './component/layout/NavBar';
import WebIntro from './component/WebIntro/WebIntro';

function App() {
  return (
    <Fragment>
      <NavBar />
      <WebIntro />
    </Fragment>
  );
}

export default App;
