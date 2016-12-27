import React, {Component} from 'react';

//Class at the top of component to enable hot-reloading (needs parent class)

const CalculatorStyle = {
  color: 'red'
};

class Calculator extends Component {
  render() {
    return (
      <div style={CalculatorStyle}>Calculator goes here</div>
    );
  }
}

export default Calculator;
