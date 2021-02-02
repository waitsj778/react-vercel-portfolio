import React, { Component } from 'react';
import posed from 'react-pose';
import ScriptTag from 'react-script-tag';
const Box = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.6 } 
})
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <Box><i className={item.className} /></Box>
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
      <ScriptTag isHydration={true} type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer />
      {/* vertical badge */}
      <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ja_JP" data-type="vertical" data-theme="dark" data-vanity="sanghyun-hong-8188b718b">
        <a class="LI-simple-link" href='https://jp.linkedin.com/in/sanghyun-hong-8188b718b?trk=profile-badge'>SANGHYUN HONG</a>
      </div>
    </footer>
    );
  }
}