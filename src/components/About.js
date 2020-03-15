import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Tag, TagGroup } from 'rsuite';
import { Button } from 'rsuite';
import axios from 'axios';
export default class About extends Component {
   constructor(props) {
      super(props);
      this.state = {
      profilepic: 'https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595'
      };
      (async () => {
         const res = await axios.get('https://sanghyunhong.now.sh/api/gets3?imagesrc');
         const profilepic = res.data.imagesrc;
         return profilepic;
      })().then(profilepic => this.setState({profilepic:profilepic}))
   }
   render() {
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">
               
               <img className="profile-pic" src={this.state.profilepic} alt="#"></img>

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
                     <a href={this.state.profilepic} download="test-downlaod.jpg"><Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> resume</Button></a>&nbsp;&nbsp;
                     {/* <Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> resume</Button>&nbsp;&nbsp; */}
                     <Button style={{background: "#000000", color: "#FFFFFF"}}><Icon icon="file-pdf-o" onClick={this.open} style={{color: "#DB0909"}} /> working career</Button>
       				   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}