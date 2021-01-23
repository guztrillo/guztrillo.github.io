import React, { Component } from 'react';

export default class Footer extends Component {
     render() {
          return (
               <footer className="flex flex-col sm:flex-row sm:justify-between px-4 pt-14 h-60 space-y-5 sm:space-y-0 text-coolGray-300 bg-coolGray-800">
                    <div>
                         <span>I'm Carlos Guzman</span>
                         <p className="text-xs">don't forget it</p>
                    </div>
                    <span> {(new Date().getFullYear())} - Ciudad Guayana, Venezuela</span>
               </footer>
          )
     }
}