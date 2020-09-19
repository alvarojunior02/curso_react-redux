import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:"",
      email: "",

    }
    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.changeInput = this.changeInput.bind(this);
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

  changeInput(event) {
    let target = event.target;
    let index = target.name;
    this.setState({
      [index]: target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            <form>
              <label>
                Nome:
                <input 
                  type="text" 
                  name="name" 
                  value={this.state.name}
                  onChange={this.changeInput}>
                </input>
              </label>
              <label>
                Email:
                <input 
                  type="text" 
                  name="email" 
                  value={this.state.email}
                  onChange={this.changeInput}>
                </input>
              </label>
            </form>
          </div>
          {this.state.name} - {this.state.email}
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
