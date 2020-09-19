import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import routesConfig from './routesConfig';

class App extends Component {

  constructor(props){
    super(props);
  };

  render() {
    return (
      <div className="App">
        <header id="main-header">
          <Link style={{ textDecoration: 'none', color: '#fff'}} to="/">
            <p className="link">Home</p>
          </Link>
          <Link style={{ textDecoration: 'none', color: '#fff'}} to="/user">
            <p className="link">User</p>
          </Link>
        </header>
        
        <body>
          {routesConfig.map((value, key) => {
            return(
              <Route 
                key={key} 
                path={value.path}
                component={value.component}
                exact={value.exact}> 
              </Route>
            );
          })}
        </body>
      </div>
    );
  }
}

export default App;
