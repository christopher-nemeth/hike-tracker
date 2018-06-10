import React from 'react'
import {HikesComp} from './HikesComp'

export class Main extends React.Component {
  render() {
    return (
      <div className='app-main'>
        <div className='sub-header'>
          <h2 className='sub-h2'>Track your hikes and review them!</h2>
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