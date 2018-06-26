import React from 'react'
import {Link} from 'react-router-dom'

export class Header extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Link to='/'><img className="header-logo" src="../mtn-logo.1.png" alt="mountain" /></Link>
        <nav className='nav'>
          <Link to='/app/hikes'>Hikes </Link>
          <Link to='/app/reviews'>Reviews</Link>
        </nav>
      </div>
    )
  }
}