import React, { Component } from "react";
import "./tailwind.output.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.getElementById('home').classList.add('text-indigo-400');
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(){
    // alturas de las secciones
    let homeH =  document.getElementById('welcome-section').offsetHeight;
    let proH = document.getElementById('projects').offsetHeight;
    if(window.scrollY < homeH){
      document.getElementById('home').classList.add('text-indigo-400');
      document.getElementById('works').classList.remove('text-indigo-400');
      document.getElementById('contacts').classList.remove('text-indigo-400');
    } else if (window.scrollY >= homeH && window.scrollY < 0.95*proH + homeH) {
      document.getElementById('home').classList.remove('text-indigo-400');
      document.getElementById('works').classList.add('text-indigo-400');
      document.getElementById('contacts').classList.remove('text-indigo-400');
    } else {
      document.getElementById('home').classList.remove('text-indigo-400');
      document.getElementById('works').classList.remove('text-indigo-400');
      document.getElementById('contacts').classList.add('text-indigo-400');
    }
  }
  render() {
    return (
      <div className="container flex flex-col w-screen max-w-full font-klein">
        <Navbar/>
        <Header/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
};