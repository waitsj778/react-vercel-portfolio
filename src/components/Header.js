import React, { Component } from 'react';
import posed from 'react-pose';
import ScriptTag from 'react-script-tag';
const Box = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.6 } 
})
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Certifications</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.role}・{resumeData.roleDescription}</h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><Box><i className={item.className}></i></Box></a>
                              </li>
                              )
                          }
                    )
                  }
               </ul>
               <ScriptTag isHydration={true} type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer />
               {/* vertical badge */}
               <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ja_JP" data-type="vertical" data-theme="dark" data-vanity="sanghyun-hong-8188b718b">
                 <a class="LI-simple-link" href='https://jp.linkedin.com/in/sanghyun-hong-8188b718b?trk=profile-badge'>SANGHYUN HONG</a>
               </div>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}