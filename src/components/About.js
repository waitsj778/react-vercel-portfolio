import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Tag, TagGroup } from 'rsuite';
import { Button } from 'rsuite';
import axios from 'axios';
import ScriptTag from 'react-script-tag';
export default class About extends Component {
   constructor(props) {
      super(props);
      this.state = {
      resume: 'https://octodex.github.com/images/blacktocats.png',
      workingcareer: 'https://octodex.github.com/images/blacktocats.png'
      };
      this.getSignedUrl('https://sanghyunhong.now.sh/api/getResume').then(resume => this.setState({resume:resume}));
      this.getSignedUrl('https://sanghyunhong.now.sh/api/getWorkingCareer').then(workingcareer => this.setState({workingcareer:workingcareer}));
   }
   async getSignedUrl(apiEndpoint) {
      const res = await axios.get(apiEndpoint);
      const signedUrl = res.data.resumeUrl
      return signedUrl;
   }
   render() {
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <ScriptTag isHydration={true} type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer />
               {/* vertical badge */}
               {/* <div class="LI-profile-badge"  data-version="v1" data-width="180" data-size="medium" data-locale="ja_JP" data-type="vertical" data-theme="light" data-vanity="sanghyun-hong-8188b718b">
                  <a class="LI-simple-link" href='https://jp.linkedin.com/in/sanghyun-hong-8188b718b?trk=profile-badge'>SANGHYUN HONG</a>
               </div> */}
               {/* horizontal badge */}
               <div class="LI-profile-badge" className="profile-pic" data-version="v1" data-size="medium" data-locale="ja_JP" data-type="horizontal" data-theme="dark" data-vanity="sanghyun-hong-8188b718b">
                  <a class="LI-simple-link" href='https://jp.linkedin.com/in/sanghyun-hong-8188b718b?trk=profile-badge'>SANGHYUN HONG</a>
               </div>
               {/* profile image */}
               {/* <img className="profile-pic" src="../images/profilepic.jpg" alt="#"></img> */}
            </div>

            <div className="nine columns main-col">
               <h2>Likes</h2>
               <p>
               <TagGroup>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>OSS</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Infrastructure as Code</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Automation</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Designing Distributed System</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>GCP</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>AWS</Tag>
               </TagGroup>
               </p>
               <div className="row">

                  <div className="columns contact-details">

                     <h2>Documents</h2>
                     <p>
                     <Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> resume</Button>&nbsp;&nbsp;
                     <Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> working career</Button>
                     {/* <a href={this.state.resume} download="resume.pdf"><Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> resume</Button></a>&nbsp;&nbsp;
                     <a href={this.state.workingcareer} download="workingcareer.pdf"><Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> working career</Button></a> */}
       				   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}