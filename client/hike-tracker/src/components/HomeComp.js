import React from 'react';
import {Link} from 'react-router-dom'

export class HomeComp extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Link to='/app/hikes'><img className="logo" src="../mtn-logo.png" alt="mountain"/></Link>
        <h1><Link className='home-h1' to='/app/hikes'>Hike Tracker</Link></h1>
      </div>
    )
  }
}