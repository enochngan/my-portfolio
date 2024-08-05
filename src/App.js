import React, { useEffect, useRef } from 'react'; // Import React and hooks
import './App.css'; // Import the CSS file for styling
import Header from './components/Header'; // Import the Header component
import About from './components/About'; // Import the About component
import Projects from './components/Projects'; // Import the Projects component
import Contact from './components/Contact'; // Import the Contact component

function App() {
  return (
    <div className="App">
      <Header />
      <About /> {/* Include the About component */}
      <Projects /> {/* Include the Projects component */}
      <Contact /> {/* Include the Contact component */}
    </div>
  );
}

export default App; // Export the App component as the default export
