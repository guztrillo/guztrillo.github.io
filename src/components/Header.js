import React, { Component } from 'react';

export default class Header extends Component {
     render() {
          return (
               <header id="welcome-section" className="h-screen flex flex-col px-6 md:px-0 sm:items-center sm:text-center bg-gradient-to-b from-coolGray-100 via-coolGray-200 to-coolGray-300">
                    <h1 className="h-1/2 text-7xl sm:text-8xl font-gogh text-indigo-900 flex items-end">I'm Carlos Guzman</h1>
                    <div className="h-1/2 text-xl text-coolGray-700 flex flex-col">
                         <p className="h-3/5">An electrical engineer who started to learn web development</p>
                         <p className='h-2/5 text-base text-indigo-400 flex items-center sm:justify-center'>This website was created using React.js and TailWindCSS.</p>
                    </div>
               </header>
          )
     }
}