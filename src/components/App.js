import React, {PropTypes, Component} from 'react';
import Header from './commonComponents/Header';

const AppStyle = {
  margin: "auto",
  width: "300px"
};

class App extends Component {
  render() {
    return (
      <div style={AppStyle} className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
