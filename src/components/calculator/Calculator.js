import React, {Component} from 'react';
import styled from 'styled-components';
import CalculatorHeader from './CalculatorHeader';
import CalculatorOutput from './CalculatorOutput';
import CalculatorClearbuttons from './CalculatorClearbuttons';
import CalculatorSmallbuttons from './CalculatorSmallbuttons';

//Class at the top of component to enable hot-reloading (needs parent class)

const Div = styled.div`
  width: 300px;
  height: 420px;
  margin: auto;
  marginTop: 30px;
  backgroundColor: rgb(189,183,107);
  borderRadius: 15px 15px 10px 10px;
  boxShadow: 7px 9px 2px rgb(81, 63, 63);
  border: 6px solid rgb(165, 160, 80);
  resize: both;
`;

class Calculator extends Component {
  render() {
    return (
      <Div>
        <CalculatorHeader />
        <CalculatorOutput />
        <CalculatorClearbuttons />
        <CalculatorSmallbuttons />
      </Div>
    );
  }
}

export default Calculator;
