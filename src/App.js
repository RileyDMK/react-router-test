import React, { Component } from 'react';
import logo from './logo.svg';
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
  <div class="hero-image">
    <div class="main-page">
      <Insight />
      <Integrity />
      <Integration />
      <h1 class="logo">Placeholder</h1>
    </div>
  </div>
)

const Insight = () => (
  <div id="insight" class="nav-item">
    <h1 class="heading">Insight</h1>
    <div class="hero-text">
      <Integrity />
      <Integration />
    </div>
  </div>
  )
const Integrity = () => (
  <div id="integrity" class="nav-item">
    <h1>Integrity</h1>
  </div>
)

class Integration extends Component {
  render(){
    return (
      <div id="integration" class="nav-item">
        <h1>Integration</h1>
      </div>
    );
  }
}

export default App;
