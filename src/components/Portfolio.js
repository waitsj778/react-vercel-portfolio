import React, { Component } from 'react';
import Certifications from './Certifications';
import resumeData from '../resumeData';
import '../App.css';
export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <Certifications resumeData={resumeData}/>
          </div>
        </div>
      </div>
      </section>
    );
  }
}