import React, {PropTypes} from 'react';
import styled from 'styled-components';
import inputCheck from './calculatorFunctions/inputCheck';
import Evaluate from './calculatorFunctions/Evaluate';

const Div = styled.div`
  height: 68%;
`;

const InnerDiv = styled(Div)`
  height: 17%;
  textAlign: center;
`;

const Button = styled.button`
  height: 90%;
  width: 20.33%;
  fontSize: 19px;
  borderRadius: 20px;
  border: 3px solid rgb(150,150,150);
  backgroundColor: rgb(221,160,221, .5);
  fontFamily: Arial, sans-serif;
  boxShadow: 4px 5px 3px 0 rgba(0, 0, 0, .5);
  marginRight: 3px;
  
  &:focus {
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
  }
  
  &:hover {
    background-color: rgb(150,150,150);
  }
  
  &:active {
    transform: translateY(3px);
  }
`;

const EqualButton = styled(Button)`
  background-color: rgb(171, 189, 246);
  border: 3px solid rgb(150,150,246);
  
  &:hover {
    background-color: rgb(150,150,246);
  }
`;

const CalculatorSmallbuttons = ({theOutput, newOutputState, impliedOverWrite, newOutputStateOverWrite}) => {

  const newInput = input => newOutputState(inputCheck(theOutput, input, impliedOverWrite));

  const inputEvaluation = () => newOutputStateOverWrite(Evaluate(theOutput));

  return (
    <Div>
      <InnerDiv>
        <Button onClick={() => newInput('7')}>7</Button>
        <Button onClick={() => newInput('8')}>8</Button>
        <Button onClick={() => newInput('9')}>9</Button>
        <Button onClick={() => newInput(' / ')}>/</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newInput('4')}>4</Button>
        <Button onClick={() => newInput('5')}>5</Button>
        <Button onClick={() => newInput('6')}>6</Button>
        <Button onClick={() => newInput(' * ')}>x</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newInput('1')}>1</Button>
        <Button onClick={() => newInput('2')}>2</Button>
        <Button onClick={() => newInput('3')}>3</Button>
        <Button onClick={() => newInput(' - ')}>-</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newInput('0')}>0</Button>
        <Button onClick={() => newInput('.')}>.</Button>
        <EqualButton onClick={inputEvaluation}>=</EqualButton>
        <Button onClick={() => newInput(' + ')}>+</Button>
      </InnerDiv>
    </Div>
  );
};

export default CalculatorSmallbuttons;
