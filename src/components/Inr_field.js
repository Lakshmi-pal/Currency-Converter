import React, { Component } from 'react';
import '../App.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class Inr_field extends Component {
    render() {
        return(
            <InputGroup className='inr-field'>
                <InputGroup.Prepend>
                    <InputGroup.Text>&#8377;</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder='0.00'
                    type='text'
                    name='inr' 
                    value={this.props.inrVal} 
                    onChange={this.props.handleInputChange}
                />
            </InputGroup>
        )
    }
}

export default Inr_field;