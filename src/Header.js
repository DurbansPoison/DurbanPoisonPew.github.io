import React, { Component } from 'react';
import DurbBan from './assets/durb-ban.png';

export default class Header extends Component {
  render(){
    return(
      <header className="intro-header ttt" style={{ backgroundImage:`url(${DurbBan})`,backgroundRepeat:"no-repeat", backgroundSize:"contain"  }}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="site-heading">
                          {/* <h1><b>Durban Poison</b></h1>
                          <hr className="small" />
                          <span className="subheading">3D Printing Freedom One Part At A Time.</span> */}
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}
