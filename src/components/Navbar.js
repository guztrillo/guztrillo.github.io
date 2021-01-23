import React, { Component } from 'react';

export default class Navbar extends Component {
     render() {
          return (
               <nav id="navbar" className="fixed text-coolGray-100 w-screen h-auto bg-coolGray-800 uppercase z-50">
                    <ul className="flex flex-row justify-around md:justify-center space-x-0 md:space-x-20">
                         <a href="#welcome-section">
                              <li className="py-2.5" id="home">Home</li>
                         </a>
                         <a href="#projects">
                              <li className="py-2.5" id="works">Works</li>
                         </a>
                         <a href="#contact">
                              <li className="py-2.5" id="contacts">Contact</li>
                         </a>
                    </ul>
               </nav>
          )
     }
}