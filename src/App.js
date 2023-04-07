import React from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

function setWindowHeight() {
  const windowHeight = window.innerHeight;
  document.documentElement.style.setProperty('--window-height', `${windowHeight}px`);
}
window.addEventListener('load', setWindowHeight);
window.addEventListener('resize', setWindowHeight);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
