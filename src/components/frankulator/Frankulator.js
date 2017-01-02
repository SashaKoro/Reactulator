import React, {Component} from 'react';
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

class Frankulator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theOutput: '',
      overWrite: 'no'
    };
  }

  render() {
    const Cleared = theOutput => this.setState({theOutput});

    const newValueAdded = (theOutput, overWrite) =>
      this.setState({theOutput: theOutput, overWrite: 'no'});

    const Frankulate = (theOutput, overWrite) =>
      this.setState({theOutput: theOutput, overWrite: 'yes'});

    return (
      <Div>
        <FrankulatorHeader />
        <FrankulatorOutput theOutput={this.state.theOutput} />
        <FrankulatorClearbuttons
          theOutput={this.state.theOutput}
          newOutputState={Cleared} />
        <FrankulatorSmallbuttons
          overWrite={this.state.overWrite}
          newOutputState={newValueAdded}
          newOutputStateOverWrite={Frankulate}
          theOutput={this.state.theOutput} />
        <Conductors />
      </Div>
    );
  }
}

export default Frankulator;
