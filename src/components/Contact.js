import React, { Component } from 'react';

export default class Contact extends Component {
     render() {
          return (
               <section id="contact" className="flex flex-col h-auto bg-gradient-to-b from-coolGray-300 to-coolGray-400 pt-14 pb-10 sm:pb-0 text-lg">
                    <div id="contact-title" className="h-52 flex flex-col items-center justify-center">
                         <h2 className="text-3xl font-gogh text-indigo-900 text-center">Please hire me, I'm Hungry
                         <p className="text-base text-center">(for knowledge)</p>
                         </h2>
                         <p className="text-coolGray-700 pt-5">I learn fast</p>
                    </div>
                    <div id="rrss" className="flex flex-col sm:flex-row items-center sm:items-start justify-around sm:-space-x-40 h-52 sm:pt-10 text-lg">
                         <div className="contact-links">
                              <span><i className="fab fa-github text-2xl"></i></span><a href="https://github.com/guztrillo"
                                   id="profile-link" target="_blank" rel="noopener noreferrer">Github</a>
                         </div>
                         <div className="contact-links">
                              <span><i className="fab fa-linkedin text-2xl"></i></span><a
                                   href="https://www.linkedin.com/in/carlos-guzmant02/"
                                   target="_blank" rel="noopener noreferrer">Linkedin</a>
                         </div>
                         <div className="contact-links">
                              <span><i className="fas fa-at text-2xl"></i></span><a href="mailto:cdriangt@gmail.com"
                                   target="_blank" rel="noopener noreferrer">Email me</a>
                         </div>
                    </div>
               </section>
          )
     }
}