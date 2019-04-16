import React, { Component } from 'react';
import '../App.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class Usd_field extends Component {
    render() {
        return(
            <InputGroup className="usd-field">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    placeholder='0.00'
                    type='text'
                    name='usd' 
                    value={this.props.usdVal} 
                    onChange={this.props.handleInputChange}
                />
            </InputGroup>            
        )
    }
}

export default Usd_field;