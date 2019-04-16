import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import Inr_field from './components/Inr_field';
import Rate_field from './components/Rate_field';
import Usd_field from './components/Usd_field';
import Header from './components/Header';

class App extends Component {

  state = {
    inr : 0,
    usd : 0,
    rate : 69.17,
  }

  handleInputChange = (e) => {
    e.preventDefault();

    switch(e.target.name){
      case 'inr': {
        this.setState({
          inr: e.target.value,
          usd: (e.target.value / this.state.rate).toFixed(2)
        })
        break;
      }
      case 'usd': {
        this.setState({
          usd: e.target.value,
          inr: (e.target.value * this.state.rate).toFixed(2)
        })
        break;
      }
      case 'rate': {
        this.setState({
          rate: e.target.value
        })
        break;
      }
      default: {
        return null
      }
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col sm={4}>
              <Inr_field 
                handleInputChange={this.handleInputChange} 
                inrVal={this.state.inr} 
              />
            </Col>
            <Col sm={4}>
              <Usd_field 
                handleInputChange={this.handleInputChange} 
                usdVal={this.state.usd} 
              />
            </Col>
            <Col sm={4}>
              <Rate_field 
                handleInputChange={this.handleInputChange} 
                rate={this.state.rate} 
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
