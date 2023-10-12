import React from 'react'
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Header, About, Skills, Contact, LifeStyle, Footer } from './container';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <LifeStyle />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
