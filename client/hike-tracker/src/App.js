import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { HomeComp } from './components/HomeComp';
import { Hikes } from './components/Hikes';
import { HikesForm } from './components/HikesForm';
import { ReviewsForm } from './components/ReviewsForm';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hikes: [],
      reviews: []
    };
  }

  updatedHike = (hike) => {
    fetch('https://tower-project.herokuapp.com/hikes')
      .then(res => res.json())
      .then(res => {
        this.setState({
          hikes: res.data
        });
      });
  }

  updatedReview = (review) => {
    fetch('https://tower-project.herokuapp.com/reviews')
      .then(res => res.json())
      .then(res => {
        this.setState({
          reviews: res.data
        });
      });
  };

  componentDidMount() {
    fetch('https://tower-project.herokuapp.com/hikes')
      .then(res => res.json())
      .then(res => {
        this.setState({
          hikes: res.data
        });
      });

    fetch('https://tower-project.herokuapp.com/reviews')
      .then(res => res.json())
      .then(res => {
        this.setState({
          reviews: res.data
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Route path='/app' component={Header} />
            </div>
            <div className="main">
              <Route path='/' component={HomeComp} exact />
              <div className='form-container'>
                <Route path='/app/hikes' component={() => <HikesForm updatedHike={this.updatedHike} />} />
              </div>
              <Route path='/app/hikes' component={() => <Hikes updatedHike={this.updatedHike} hikes={this.state.hikes} />} />
              <div className='form-container'>
                <Route path='/app/reviews' component={() => <ReviewsForm updatedReview={this.updatedReview} />} />
              </div>
              <Route path='/app/reviews' component={() => <Reviews updatedReview={this.updatedReview} reviews={this.state.reviews} />} />
            </div>
          </div>
          <Route path='/' component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;