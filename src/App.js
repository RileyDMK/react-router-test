import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

// TODO: Refactor components into classes so that I can pass down state

class App extends Component {
  // Constructor(props){
  //   super(props);
  //   this.handleAboutUsClick = this.handleAboutUsClick.bind(this);
  //   this.state = {isAboutUs: false}
  // }
  // handleAboutUsClick() {
  //   this.setState({isAboutUs: true});
  // }
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Main />
        <Navbar />
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
      <Route path='/about' component={AboutUs}/>
    </Switch>
  </main>
)

const Home = () => (
  <div>

    <div className="main-page">
      <Insight />
      <Integrity />
      <Integration />
      <img src={require("./images/pivotpointlogo_1500.png")} alt="Pivot Point Logo" id="logo" />
    </div>
    <div class="hero-image">

    </div>
  </div>
)

// class NavHole extends Component{
//   constructor(props){
//     super(props);
//     this.state = {isActivated: False};
//
//     this.handleHover = this.handlHover.bind(this);
//   }
//   handleHover(){
//     this.setState(prevState => ({
//       isActivated: !prevState.isActivated
//     }));
//   }
//   render(){
//     return(
//       <div></div>
//     )
//   }
// }

const Insight = () => (
  <div id="insight" className="nav-hole">
    <h1 id="insight-heading">Insight</h1>
    {/* <div>
      <Integrity />
      <Integration />
    </div> */}
  </div>
)
const Integrity = () => (
  <div id="integrity" className="nav-hole">
    <h1 id="integrity-heading">Integrity</h1>
  </div>
)

const Integration = () => (
  <div id="integration" className="nav-hole">
    <h1 id="integration-heading">Integration</h1>
  </div>
)

const AboutUs = () => (
  <div>
    <div class="copy">
      <img src={require("./images/pivotpointlogo_1500.png")} alt="Pivot Point Logo" id="about-logo" />
      <p>
        <br/>
        Partnerships, Capabilities and References
        <br/><br/>
        Our business is your business.
        <br/>
        PivotPoint was formed in 2001 with a simple, yet effective, philosophy:
        relationships with clients are built over time on a foundation of trust.
        By first focussing on what our clients need and when they need it, we
        implement a very tailored, fast moving, and, we think, enjoyable approach.
        The majority of our clients have worked with us, as they have evolved,
        for an average of five years or longer.
        <br/>
        From start-ups to regional and national businesses and non profits,
        PivotPoint helps you focus on what’s important – your story, your people,
        your business. Our work is to help you discover and own your story, build
        passionate corporate culture and position your business advantageously to
        current and future stakeholders.
      </p>
    </div>

    <div class="hero-image"></div>
  </div>
)

const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-*">
    {/* <a className="navbar-brand" href="#">Riley Mathis</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to='/' className="nav-link">Process<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link">Insight<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>
)




export default App;
