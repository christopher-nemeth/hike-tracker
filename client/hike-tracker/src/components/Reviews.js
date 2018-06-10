import React from 'react'
import { HikesComp } from './HikesComp'

export class Reviews extends React.Component {
  render() {
    return (
      <div className='app-main'>
        <div className='sub-header'>
          <h2 className='sub-h2'>Add a hike and review it!</h2>
        </div>
        <div className='content'>
          {this.props.hikes.map(hikes => {
            return <HikesComp hikes={hikes}/>
          })}
        </div>
      </div>
    )
  }
}