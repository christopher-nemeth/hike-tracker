import React from 'react'
import { HikesComp } from './HikesComp'

export class Hikes extends React.Component {

  render() {
    return (
      <div className='app-main'>
         <div className='sub-header'>
          <h2 className='sub-h2'>Your Hikes</h2>
        </div>
        <div className='content'>
          {this.props.hikes.map((hikes, index) => {
            return <HikesComp key={index} updatedHike={this.props.updatedHike} hikes={hikes}/>
          })}
        </div>
      </div>
    )
  }
}