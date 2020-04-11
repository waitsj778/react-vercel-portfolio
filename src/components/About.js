import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Tag, TagGroup } from 'rsuite';
import { Button } from 'rsuite';
import axios from 'axios';
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
               
               <img className="profile-pic" src="../images/profilepic.jpg" alt="#"></img>

            </div>

            <div className="nine columns main-col">
               <h2>Likes</h2>
               <p>
               <TagGroup>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>OSS</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Infrastructure as Code</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Automation</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Designing Distributed System</Tag>
               <Tag style={{background: "#EE0100", color: "#FFFFFF"}}>Openshift</Tag>
               <Tag style={{background: "#2492D1", color: "#FFFFFF"}}>Docker</Tag>
               <Tag style={{background: "#FF9901", color: "#FFFFFF"}}>AWS</Tag>
               <Tag style={{background: "#5F43E9", color: "#FFFFFF"}}>Terraform</Tag>
               <Tag style={{background: "#00BC7F", color: "#FFFFFF"}}>Nomad</Tag>
               <Tag style={{background: "#1C1E25", color: "#FFFFFF"}}>Vault</Tag>
               <Tag style={{background: "#4279F4", color: "#FFFFFF"}}>Kubernetes</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Ansible</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Film</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Jazz</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Soul</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Vinyl</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Book</Tag>
               <Tag style={{background: "#000000", color: "#FFFFFF"}}>Travel</Tag>
               </TagGroup>
               </p>
               <div className="row">

                  <div className="columns contact-details">

                     <h2>Documents</h2>
                     <p>
                     <a href={this.state.resume} download="resume.pdf"><Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> resume</Button></a>&nbsp;&nbsp;
                     <a href={this.state.workingcareer} download="workingcareer.pdf"><Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> working career</Button></a>
       				   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}