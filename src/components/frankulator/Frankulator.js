import React, {Component} from 'react';
import styled from 'styled-components';
import FrankulatorHeader from './FrankulatorHeader';
import FrankulatorOutput from './FrankulatorOutput';
import FrankulatorClearbuttons from './FrankulatorClearbuttons';
import FrankulatorSmallbuttons from './FrankulatorSmallbuttons';

const Div = styled.div`
  width: 400px;
  height: 580px;
  backgroundColor: rgb(8, 114, 0);
  margin: auto;
  marginTop: 30px;
  borderRadius: 15px 15px 10px 10px;
  boxShadow: 7px 9px 2px black;
  border: 7px solid rgb(8, 97, 0);
  text-align: center;
`;

class Frankulator extends Component {
  render() {
    return (
      <Div>
        <FrankulatorHeader />
        <FrankulatorOutput />
        <FrankulatorClearbuttons />
        <FrankulatorSmallbuttons />
      </Div>
    );
  }
}

export default Frankulator;
