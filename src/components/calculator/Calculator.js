import React, {Component} from 'react';
import styled from 'styled-components';
import CalculatorHeader from './CalculatorHeader';
import CalculatorOutput from './CalculatorOutput';
import CalculatorClearbuttons from './CalculatorClearbuttons';
import CalculatorSmallbuttons from './CalculatorSmallbuttons';

const Div = styled.div`
  width: 300px;
  height: 420px;
  margin: auto;
  marginTop: 30px;
  backgroundColor: rgb(189,183,107);
  borderRadius: 15px 15px 10px 10px;
  boxShadow: 7px 9px 2px rgb(81, 63, 63);
  border: 6px solid rgb(165, 160, 80);
  resize: both;
`;

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theOutput: '',
      impliedOverWrite: false
    };
  }

  Cleared(theOutput){
    this.setState({theOutput});
  }
  NewValueAdded(theOutput){
    this.setState({theOutput, impliedOverWrite: false});
  }
  EvaluateInput(theOutput) {
    this.setState({theOutput, impliedOverWrite: true});
  }

  render() {
    return (
      <Div>
        <CalculatorHeader />
        <CalculatorOutput
          theOutput={this.state.theOutput} />
        <CalculatorClearbuttons
          theOutput={this.state.theOutput}
          newOutputState={this.Cleared.bind(this)} />
        <CalculatorSmallbuttons
          theOutput={this.state.theOutput}
          newOutputState={this.NewValueAdded.bind(this)}
          newOutputStateOverWrite={this.EvaluateInput.bind(this)}
          impliedOverWrite={this.state.impliedOverWrite} />
      </Div>
    );
  }
}

