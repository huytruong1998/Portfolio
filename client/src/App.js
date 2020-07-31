import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/Experience";
import NavBar from "./component/Navbar/NavBar";
import Project from "./component/Project/Project";
import WebIntro from "./component/WebIntro/WebIntro";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div id="page-container">
        <div className="root">
          <NavBar />
          <WebIntro />
          <About />
          <Project />
          <Experience />
          <Contact />
        </div>
      </div>
    </Provider>
  );
}

export default App;
