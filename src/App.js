import React from 'react'
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Header, About, Skills, Contact, Footer } from './container';
import { Photos } from './container/Photos/Photos';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Photos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
