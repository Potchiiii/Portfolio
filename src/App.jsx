import React from 'react';
import Hero from './components/Hero'
import AboutMe from './components/aboutMe/aboutMe';
import './App.css';

function App(){
  return(
    <div className="App">
      <Hero />
      <AboutMe />
    </div>
  )
} 

export default App