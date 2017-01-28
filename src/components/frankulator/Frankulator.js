import React, { Component, } from 'react';
import styled from 'styled-components';
import FrankulatorHeader from './FrankulatorHeader';
import FrankulatorOutput from './FrankulatorOutput';
import FrankulatorClearbuttons from './FrankulatorClearbuttons';
import FrankulatorSmallbuttons from './FrankulatorSmallbuttons';
import Conductors from './Conductors';

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

export default class Frankulator extends Component {
  constructor (props) {
    super(props);

    this.state = {
      theOutput: '',
      overWrite: false,
    };

    this.Cleared = this.Cleared.bind(this);
    this.newValueAdded = this.newValueAdded.bind(this);
    this.Frankulate = this.Frankulate.bind(this);
  }

  Cleared (theOutput) {
    this.setState({ theOutput, });
  }
  newValueAdded (theOutput) {
    this.setState({ theOutput, overWrite: false, });
  }
  Frankulate (theOutput) {
    this.setState({ theOutput, overWrite: true, });
  }

  render () {
    return (
      <Div>
        <FrankulatorHeader />
        <FrankulatorOutput
          theOutput={this.state.theOutput}
        />
        <FrankulatorClearbuttons
          theOutput={this.state.theOutput}
          newOutputState={this.Cleared}
        />
        <FrankulatorSmallbuttons
          theOutput={this.state.theOutput}
          newOutputState={this.newValueAdded}
          newOutputStateOverWrite={this.Frankulate}
          overWrite={this.state.overWrite}
        />
        <Conductors />
      </Div>
    );
  }
}
