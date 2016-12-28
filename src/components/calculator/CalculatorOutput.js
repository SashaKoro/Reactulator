import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 16%;
  lineHeight: 275%;
`;

const P = styled.p`
  width: 85%;
  height: 65%;
  backgroundColor: rgb(198, 254, 202);
  margin: auto;
  textAlign: right;
  fontSize: 150%;
  borderRadius: 3px;
  boxShadow: 0 0 5px 7px rgba(0, 0, 0, .6);
`;

class CalculatorOutput extends Component {
  render() {
    return (
      <Div>
        <P>output here</P>
      </Div>
    );
  }
}

export default CalculatorOutput;
