import React from 'react';
import styled from 'styled-components';
import ClearLast from './frankulatorFunctions/ClearLast';

const Div = styled.div`
  height: 50px;
`;

const Button = styled.button`
  color: black;
  height: 90%;
  width: 42%;
  font-size: 22px;
  border-radius: 7px;
  border: 3px solid rgb(100, 100, 100);
  background-color: rgb(128, 128, 128);
  font-family: Arial, sans-serif;
  box-shadow: 3px 5px 3px 0 rgba(0, 0, 0, .5);
  margin-right: 3px;
  
  &:hover {
    background-color: rgb(140,30,30);
    border: rgb(175,0,0);
  }
    
  &:focus {
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
  }
  
  &:active {
    transform: translateY(3px);
  }
`;

const FrankulatorClearbuttons = ({theOutput, newOutputState}) => {
  return(
    <Div>
      <Button onClick={() => newOutputState('')} >Clear All</Button>
      <Button onClick={() => newOutputState(ClearLast(theOutput))} >Clear Last</Button>
    </Div>
  );
};

export default FrankulatorClearbuttons;
