import React, { Component } from 'react';
import { Modal } from 'rsuite';
import { Button } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import posed from 'react-pose'
const Box = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 } 
})
export default class Certification extends Component {
    constructor(props) {
        super(props);
        this.state = {
        show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ show: false });
    }
    open() {
        this.setState({ show: true });
    }
    
    render() {
              return(
                <div className="modal-container" style={{display: "inline-block"}}>
                <Box  style={{cursor: "pointer"}}><img src={this.props.item.image} alt="#" style={{height: '150px'}}　onClick={this.open}></img></Box>
                <Modal show={this.state.show} onHide={this.close}>
                <Modal.Header>
                <Modal.Title>{this.props.item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Grid fluid>
                 <Row>
                  <Col xs={8} sm={8} md={8} lg={8}>
                  <img src={this.props.item.image} alt="#" style={{height: '80px'}}></img>
                  </Col>
                  <Col xs={16} sm={16} md={16} lg={16}>
                  <div>{this.props.item.title}</div>
                  <div>発行団体:{this.props.item.foundation}</div>
                  <div>発行日:{this.props.item.from}・有効期限 {this.props.item.expire}</div>
                  <div>認定番号:{this.props.item.certid}</div>
                  </Col>
                 </Row>
                </Grid>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.close} appearance="primary">OK</Button>
                </Modal.Footer>
                </Modal>
                </div>
              )
            }
}