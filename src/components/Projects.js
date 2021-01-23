import React, { Component } from 'react';
import survey from '../img/carlosguzman-form.png'
import calculator from '../img/javascript-calculator.png'
import product from '../img/lading-page.png'
import drum from '../img/drum-machine.png'
import quote from '../img/quote-machine.png'
import pomodoro from '../img/pomodoro-clock.png'

export default class Projects extends Component {
     render() {
          return (
               <section id="projects" className="bg-coolGray-300 pt-14" >
                    <div className="text-center text-3xl font-gogh text-indigo-900">
                         <h2>Some of my works so far</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-10 font-bold">
                         <div className="group card">
                              <div className="container-pic">
                                   <img src={calculator} alt="My javaScript Calculator" className="picture"/>
                              </div>
                              <div className="title">
                                   <h3><a href={'https://github.com/guztrillo/javascript-calculator'} target="_blank" rel="noopener noreferrer" className="link">JavaScript Calculator</a></h3>
                              </div>
                         </div>
                         <div className="group card">
                              <div className="container-pic">
                                   <img src={pomodoro} alt="My Pomodoro Timer" className="picture" />
                              </div>
                              <div className="title">
                                   <h3><a href={'https://github.com/guztrillo/pomodoro-clock'} target="_blank" rel="noopener noreferrer" className="link">Pomodoro Clock</a></h3>
                              </div>
                         </div>
                         <div className="group card">
                              <div className="container-pic">
                                   <img src={quote} alt=" My random quote machine" className="picture" />
                              </div>
                              <div className="title">
                                   <h3><a href={'https://github.com/guztrillo/random-quote-machine'} target="_blank" rel="noopener noreferrer" className="link">Random Quote Machine</a></h3>
                              </div>
                         </div>
                         <div className="group card">
                              <div className="container-pic">
                                   <img src={drum} alt=" My drum machine" className="picture" />
                              </div>
                              <div className="title">
                                   <h3><a href={'https://github.com/guztrillo/drum-machine'} target="_blank" rel="noopener noreferrer" className="link">Drum Machine</a></h3>
                              </div>
                         </div>
                         <div className="group card">
                              <div className="container-pic">
                                   <img src={survey} alt=" My survey form page" className="picture" />
                              </div>
                              <div className="title">
                                   <h3><a href={'https://github.com/guztrillo/survey-form'} target="_blank" rel="noopener noreferrer" className="link">Survey Form</a></h3>
                              </div>
                         </div>
                         <div className="group card">
                              <div className="container-pic">
                                   <img src={product} alt="My product landing page" className="picture" />
                              </div>
                              <div className="title">
                                   <h3><a href={'https://github.com/guztrillo/product-landing-page'} target="_blank" rel="noopener noreferrer" className="link">Product Landing Page</a></h3>
                              </div>
                         </div>
                    </div>
               </section>
          )
     }
}