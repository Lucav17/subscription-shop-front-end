import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index'
import NavBar from './components/Header';
import './assets/style.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    }
  }

  componentWillMount() {
    let key = window.localStorage.getItem('token');
    console.log(key)
    if(key) {
      this.setState({
        token: key
      })
    }
  }

  componentDidUpdate() {
    let key = window.localStorage.getItem('token');
    console.log(key)
    if(!key && this.state.token) {
      this.setState({
        token: null
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar token={this.state.token}/>
        <Switch>
            <Route path='/' component={Index} />
        </Switch>
      </div>
    );
  }
}

export default App;
