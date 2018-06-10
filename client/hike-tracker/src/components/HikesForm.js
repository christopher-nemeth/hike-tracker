import React from 'react'

export class HikesForm extends React.Component {
  state = {
    name: '',
    location: '',
    elevation: '',
    terrain: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({[name]: event.target.value})
    console.log('state submitted')
  }

  formSubmit = (event) => {
    console.log('submitted')
    event.preventDefault()
    const url = 'https://tower-project.herokuapp.com/hikes'
    const postData = {
      name: this.state.name,
      location: this.state.location,
      elevation: this.state.elevation,
      terrain: this.state.terrain,
    }
    console.log(postData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    this.setState({
      name: '',
      location: '',
      elevation: '',
      terrain: ''
    })
  }
  render() {
    return(
      <div className='submit-container'>
        <h2 className='submit-header'>Add a Hike!</h2>
        <form className='submit-form' onSubmit={this.formSubmit}>
          <label htmlFor='name'>Hike Name</label>
          <input name="name" type="text" required></input>
          <label htmlFor='location'>Location</label>
          <input name="location" type='text'  onChange={this.handleChange}></input>
          <label htmlFor='elevation'>Elevation Gain</label>
          <input name='elevation' type='number'  onChange={this.handleChange} required></input>
          <label htmlFor='terrain' type>Terrain</label>
          <input name='terrain' type='text'  onChange={this.handleChange} required></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}