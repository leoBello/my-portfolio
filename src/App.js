import React from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import logo from './logo.svg';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

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
