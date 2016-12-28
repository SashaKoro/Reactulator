import React, {PropTypes, Component} from 'react';
import Header from './commonComponents/Header';
import styled from 'styled-components';

const Div = styled.div`
  margin: auto;
  width: 500px;
`;

class App extends Component {
  render() {
    return (
      <Div className="container-fluid">
        <Header />
        {this.props.children}
      </Div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
