import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Header />
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
    <div class="hero-text">
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
      <button>Hire me</button>
    </div>
  </div>
)

const Insight = () => (
  <div>
    <h1>Insight</h1>
  </div>
)
const Integrity = () => (
  <div>
    <h1>Integrity</h1>
  </div>
)

const Integration = () => (
  <div>
    <h1>Integration</h1>
  </div>
)

export default App;
