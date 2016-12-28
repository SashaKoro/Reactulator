import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 57px;
`;

const H1 = styled.h1`
  color: black;
  vertical-align: middle;
  line-height: 57px;
  font-size: 47px;
  font-family: "Courier";
`;

class FrankulatorHeader extends Component {
  render(){
    return (
      <Div>
        <H1>Frankulator</H1>
      </Div>
    );
  }
}

export default FrankulatorHeader;
