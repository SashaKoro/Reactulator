import React from 'react';
import styled from 'styled-components';



const LeftConductor = styled.span`
  background-color: gray;
  float: left;
  color: red;
  float: left;
  height: 40px;
  width: 40px;
  margin-left: -47px;
  margin-top: -55px;
  -webkit-border-radius: 5px 0 0 5px;
`;

const RightConductor = styled(LeftConductor)`
  margin-left: 393px;
  -webkit-border-radius: 0 5px 5px 0;
  boxShadow: 5px 8px 3px black;
`;


const Conductors = () => {
  return (
    <div>
      <LeftConductor />
      <RightConductor />
    </div>
  );
};

export default Conductors;
