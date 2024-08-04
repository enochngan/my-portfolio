import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <About />
      <Projects />
    </div>
  );
}

export default App;
