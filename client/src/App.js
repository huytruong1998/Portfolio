import React, { Component,lazy,Suspense } from 'react';
import './App.scss';
import NavBar from './component/Navbar/NavBar';
// import WebIntro from './component/WebIntro/WebIntro';
import About from './component/About/About';
import Loading from './component/common/Loading/Loading';
const WebIntro = lazy(()=> import('./component/WebIntro/WebIntro'))

function App() {
  return (
  
    <div id='page-container' >
      <NavBar />
      <Suspense fallback={<Loading />}>
        <WebIntro />
        </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      

    </div>

  );
}

export default App;
