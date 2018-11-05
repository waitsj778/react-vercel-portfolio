import React, { Component } from 'react';
import { Icon } from 'rsuite';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4><Icon icon="envelope-o" />&nbsp;&nbsp; 
                  {resumeData.private_email}
                </h4>
                <h4><Icon icon="phone" />&nbsp;&nbsp;
                  {resumeData.phone}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}