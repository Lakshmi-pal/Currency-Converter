import React, { Component } from 'react';
import '../App.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class Rate_field extends Component {
    render() {
        return(
            <InputGroup className="rate-field">
                <InputGroup.Prepend>
                    <InputGroup.Text>Rate</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder='Rate'
                    type='text'
                    name='rate' 
                    value={this.props.rate} 
                    onChange={this.props.handleInputChange}
                />
            </InputGroup>
        )
    }
}

export default Rate_field;