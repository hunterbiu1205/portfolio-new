import React from 'react'
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Header, About, Skills, Contact, Footer } from './container';
import { LifeStyle } from './container/LifeStyle/LifeStyle';

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
