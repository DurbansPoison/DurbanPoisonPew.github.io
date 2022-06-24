import React, { Component } from 'react';
import Odysee from './assets/Logo_Textless_Vector.svg';
import Instagram from './assets/Instagram_logo_2016.svg';
export default class Footer extends Component {
  render(){
    return(
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <ul className="list-inline text-center">
                          <li>
                              <a href="https://www.instagram.com/durbanpoisonpew/">
							  	<img src={Instagram} alt="instagram logo" />

                              </a>
                          </li>
                          <li>
                              <a href="https://odysee.com/@DurbanPoisonPew:9" target="_blank">
                                  <img src={Odysee} alt="odysee logo" />
                              </a>
                          </li>
                          {/* <li>
                              <a href="#">
                                  <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li> */}
                      </ul>
                      <p className="copyright text-muted">Copyright &copy; DurbanPoisonPew.com</p>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
}
