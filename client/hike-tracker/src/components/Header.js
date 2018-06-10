import React from 'react'
import {Link} from 'react-router-dom'

export class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-wrapper">
          <h1 className="app-title">Hike Tracker</h1>
           <nav className='nav-right'>
            <ul>
              <li><Link to='/app/home'>Home</Link></li>
              <li><Link to='/app/Reviews'>Reviews</Link></li>
              {/* <li><Link to='/app/about'>About</Link></li> */}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}