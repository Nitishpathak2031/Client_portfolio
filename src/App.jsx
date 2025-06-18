// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Edits from './Components/Pages/Edits';
import Testimonials from './Components/Pages/Testimonials';
import Contacts from './Components/Pages/Contacts';
import Footer from './components/pages/Footer';


const App = () => {
  return (
    <div className="w-full h-full m-0 p-0 scroll-smooth">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="edits"><Edits /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contacts /></section>
        <section id="contact"><Footer /></section>
      </main>
    </div>
  );
};

export default App;
