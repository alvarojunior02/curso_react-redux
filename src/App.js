import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:"Alvaro",
    }
    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
  };

  changeState() {
    this.setState({
      name:"Alvaro Junior"
    });
  }

  resetState() {
    this.setState({
      name:"Alvaro"
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.name}
        </div>
        <div>
          <button onClick={this.changeState}>Mudar Estado</button>
          <button onClick={this.resetState}>Resetar Estado</button>
        </div>
      </div>
    );
  }
}

export default App;
