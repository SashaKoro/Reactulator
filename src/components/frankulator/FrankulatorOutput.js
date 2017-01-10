import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 75px;
  line-height: 45px;
`;

const Output = styled.output`
  color: black;
   width: 85%;
   height: 80%;
   background-color: white;
   margin: auto;
   text-align: right;
   font-size: 22px;
   border-radius: 5px;
   border-style: solid;
   border-width: 7px;
   border-color: black;
`;

const FrankulatorOutput = ({theOutput}) => {
  return(
    <Div>
      <Output>{theOutput}</Output>
    </Div>
  );
};

FrankulatorOutput.propTypes = {
  theOutput: PropTypes.object.isRequired
};

export default FrankulatorOutput;
