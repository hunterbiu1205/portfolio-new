import React from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { Header } from './container/Header/Header'
import { About } from './container/About/About'
import { Skills } from './container/Skills/Skills';
import { Contact } from './container/Contact/Contact';
import { Footer } from './container/Footer/Footer';
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
