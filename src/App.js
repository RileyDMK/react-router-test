import React, { Component } from 'react';
import logo from './images/pivotpointlogo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

// TODO: Refactor components into classes so that I can pass down state

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Main />
      </div>
    );
  }
}

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/insight'>Insight</Link></li>
        <li><Link to='/integrity'>integrity</Link></li>
        <li><Link to='/integration'>Integration</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/insight' component={Insight}/>
      <Route path='/integrity' component={Integrity}/>
      <Route path='/integration' component={Integration}/>
    </Switch>
  </main>
)

const Home = () => (
  <div className="hero-image">
    <div className="main-page">
      <Insight />
      <Integrity />
      <Integration />
      <img src={require("./images/pivotpointlogo_1500.png")} alt="Pivot Point Logo" id="logo" />
    </div>
  </div>
)

const Insight = () => (
  <div id="insight" className="nav-item">
    <h1 className="heading">Insight</h1>
    <div className="hero-text">
      <Integrity />
      <Integration />
    </div>
  </div>
)
const Integrity = () => (
  <div id="integrity" className="nav-item">
    <h1>Integrity</h1>
  </div>
)

class Integration extends Component {
  render(){
    return (
      <div id="integration" className="nav-item">
        <h1>Integration</h1>
      </div>
    );
  }
}

export default App;
