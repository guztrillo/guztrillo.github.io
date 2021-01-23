import React, { Component } from 'react';

export default class Header extends Component {
     render() {
          return (
               <header id="welcome-section" className="h-screen flex flex-col justify-center pl-6 sm:items-center sm:text-center bg-gradient-to-b from-coolGray-100 via-coolGray-200 to-coolGray-300">
                    <h1 className="text-7xl sm:text-8xl mb-5 font-gogh text-indigo-900">I'm Carlos Guzman</h1>
                    <p className="text-lg text-coolGray-700">An electrical engineer who started to learn web development</p>
               </header>
          )
     }
}