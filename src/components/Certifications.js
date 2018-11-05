import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import Certification from './Certification';
export default class Certifications extends Component {
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
    let resumeData = this.props.resumeData;
    const array = resumeData.certifications;
    const arrayChunk = ([...array], size = 1) => { 
        return array.reduce((acc, value, index) => 
            index % size ? acc : [...acc, array.slice(index, index + size)], []); 
        };  
    const certs = arrayChunk(array, 6);
    return (
        <div>         
        {
            certs.map((item)=>{
                return (
                    <div>
                    {
                        item.map((data)=>{
                            return (
                                <Certification item={data}/>
                            )        
                        })
                    }
                    </div>
                )
            })
        }
        </div>
    )
}
}