import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 16%;
  lineHeight: 275%;
`;

const Output = styled.output`
  color: black;
  width: 85%;
  height: 70%;
  backgroundColor: rgb(198, 254, 202);
  margin: auto;
  textAlign: right;
  fontSize: 150%;
  borderRadius: 3px;
  boxShadow: 0 0 5px 7px rgba(0, 0, 0, .6);
`;

const CalculatorOutput = ({theOutput}) => {

  CalculatorOutput.propTypes = {
    theOutput: PropTypes.string.isRequired
  };

  return (
    <Div>
      <Output>{theOutput}</Output>
    </Div>
  );
};

export default CalculatorOutput;
