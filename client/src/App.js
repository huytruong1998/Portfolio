import React from 'react';
import './App.scss';
import NavBar from './component/Navbar/NavBar';
import { Provider } from 'react-redux';
import store from './store';
import WebIntro from './component/WebIntro/WebIntro';
import About from './component/About/About';
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';



function App() {
  return (
    <Provider store={store}>
        <div id='page-container' >
          <div className="root">
            <NavBar />       
            <WebIntro /> 
            <About />   
            <Project />
            <Contact />
          </div>
        </div>
  
      
    </Provider>
    

  );
}

export default App;
