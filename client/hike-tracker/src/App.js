import React, {Component} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {HikesForm} from './components/HikesForm';
import {Reviews} from './components/Reviews';
import {Footer} from './components/Footer';
import { Link } from '.'
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hikes: [],
    }
  }

  componentDidMount() {
    fetch('https://tower-project.herokuapp.com/hikes')
      .then(res => res.json())
      .then(res => {
        this.setState({
          hikes: res
        })
      })
  }

  render() {
    return (
      <Router>
        <div className="App Site">
          <div className="Site-content">
            <Route path='/' component={Header} />
            <Route path='/app/home' component={HikesForm} />
            <Route path='/app/home' component={() => <Main hikes={this.state.hikes} />} />
            <Route path='/app/reviews' component={HikesForm} />
            <Route path='/app/reviews' component={() => <Reviews hikes={this.state.hikes} />} />
            <Route path='/' component={Footer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
