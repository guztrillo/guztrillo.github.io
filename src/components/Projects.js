import React, { Component } from 'react';
import calculator from '../img/javascript-calculator.png'
import drum from '../img/drum-machine.png'
import quote from '../img/quote-machine.png'
import pomodoro from '../img/pomodoro-clock.png'
import cards from '../img/cards.png';
import faq from '../img/faq.png'

export default class Projects extends Component {
     render() {
          return (
               <section id="projects" className="bg-coolGray-300 pt-14" >
                    <div className="text-center text-3xl font-gogh text-indigo-900">
                         <h2>Some of my works so far</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-10 font-bold">
                         <div className="group card">
                              <a href={'https://guztrillo.github.io/TFM-FAQ-accordion-card/'} target="_blank" rel="noopener noreferrer" className="link">
                                   <div className="container-pic">
                                        <img src={faq} alt=" My survey form page" className="picture" />
                                   </div>
                                   <div className="title">
                                        <h3>FAQ accordion card</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="card">
                              <a href={'https://guztrillo.github.io/javascript-calculator/'} target="_blank" rel="noopener noreferrer" className="group">
                                   <div className="container-pic">
                                        <img src={calculator} alt="My javaScript Calculator" className="picture" />
                                   </div>
                                   <div className="title">
                                        <h3>JavaScript Calculator</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="group card">
                              <a href={'https://guztrillo.github.io/pomodoro-clock/'} target="_blank" rel="noopener noreferrer" className="link">
                                   <div className="container-pic">
                                        <img src={pomodoro} alt="My Pomodoro Timer" className="picture" />
                                   </div>
                                   <div className="title">
                                        <h3>Pomodoro Clock</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="group card">
                              <a href={'https://guztrillo.github.io/random-quote-machine/'} target="_blank" rel="noopener noreferrer" className="link">
                                   <div className="container-pic">
                                        <img src={quote} alt=" My random quote machine" className="picture" />
                                   </div>
                                   <div className="title">
                                        <h3>Random Quote Machine</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="group card">
                              <a href={'https://guztrillo.github.io/TFM-four-card-feature-section-master/'} target="_blank" rel="noopener noreferrer" className="link">
                                   <div className="container-pic">
                                        <img src={cards} alt="My product landing page" className="picture" />
                                   </div>
                                   <div className="title">
                                        <h3>Four card feature section</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="group card">
                              <a href={'https://guztrillo.github.io/drum-machine/'} target="_blank" rel="noopener noreferrer" className="link">
                                   <div className="container-pic">
                                        <img src={drum} alt=" My drum machine" className="picture" />
                                   </div>
                                   <div className="title">
                                        <h3>Drum Machine</h3>
                                   </div>
                              </a>
                         </div>
                    </div>
               </section>
          )
     }
}