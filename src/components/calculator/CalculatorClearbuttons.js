import React, {PropTypes} from 'react';
import styled from 'styled-components';
import ClearLast from './calculatorFunctions/ClearLast';

const Div = styled.div`
  height: 12%;
  textAlign: center;
`;

const Allbutton = styled.button`
  height: 90%;
  width: 42%;
  background-color: rgb(221,160,221, .5);
  border: 3px solid #9F6464;
  font-size: 17px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  box-shadow: 4px 5px 3px 0 rgba(0, 0, 0, .5);
  margin-right: 5px;
  
  &:hover {
    background-color: #9F6464;
  },
  
  &:focus {
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
  },
  
  &:active {
    transform: translateY(3px);
  }
`;

const Lastbutton = styled(Allbutton)`
  border: 3px solid rgb(150,150,150);
  
  &:hover {
    background-color: rgb(150,150,150);
  }
`;

const CalculatorClearbuttons = ({theOutput, newOutputState}) => {

  const eraseAllInput = () => newOutputState('');

  const clearLast = () => newOutputState(ClearLast(theOutput));
  return(
    <Div>
      <Allbutton onClick={eraseAllInput} >Clear All</Allbutton>
      <Lastbutton onClick={clearLast} >Clear Last</Lastbutton>
    </Div>
  );
};

export default CalculatorClearbuttons;
