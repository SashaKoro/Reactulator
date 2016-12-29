import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 57px;
`;

const H1 = styled.h1`
  lineHeight: 45px;
  fontSize: 25px;
  fontFamily: Impact;
  color: black;
  marginLeft: 20px;
`;

const CalculatorHeader = () => {
  return (
    <Div>
      <H1>Calculator</H1>
    </Div>
  );
};

export default CalculatorHeader;
