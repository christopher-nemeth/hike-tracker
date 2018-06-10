import React from 'react'

export class HikesComp extends React.Component {
  state = {
    currentSelected: ''
  }

  handleClick = (event) => {

  }


  render() {
    return (
      <div className='hike-div' id={this.props.hikes.id}>
        <h3 className='line'>Hike Name: {this.props.hikes.name}</h3>
        <h3 className='line'>Location: {this.props.hikes.location}</h3>
        <h3 className='line'>Elevation Gain: {this.props.hikes.elevation} ft</h3>
        <h3 className='line'>Terrain: {this.props.hikes.terrain}</h3>
        <button className='update' onClick={() => this.setState=(this.props.hikes.id)}>Update</button>
        <button className='delete'>Delete</button>
      </div>
    )
  }
}