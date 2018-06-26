import React from 'react';
import { Modal, Form, Button, Icon } from 'semantic-ui-react';

export class updateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      showModal: false
    }
  }

  state = {
    id: '',
    name: '',
    location: '',
    elevation: '',
    terrain: ''
  }

  fetchData() {
    fetch('https://tower-project.herokuapp.com/hikes')
      .then(res => res.json())
      .then(res => {
        this.setState({
          hikes: res.data
        })
      })
  }

  handleChange = (event) => {
    const name = event.target.name
    console.log(event.target.value)
    this.setState({[name]: event.target.value})
    console.log('state submitted')
  }

  formSubmit = (event) => {
    console.log('submitted')
    event.preventDefault()
    const url = 'https://tower-project.herokuapp.com/hikes'
    const putData = {
      name: this.state.name,
      location: this.state.location,
      elevation: this.state.elevation,
      terrain: this.state.terrain,
    }
    console.log(putData)
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(putData),
    })
    .then(response => response.json())
    .then(this.setState({
      name: '',
      location: '',
      elevation: '',
      terrain: ''
      }))
      .then(this.closeModal)
      .then(console.log(this.state.hikes))

  }

  // handleCreateButton(evt) {
  //   evt.preventDefault()
  //   this.closeModal();
  // }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const {
      showModal
    } = this.state

    return(
      <div className='submit-container'>
        <Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />Add Hike</Button>}>
          <Modal.Header>Add Hike</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.formSubmit}>
              <Form.Field>
                <label>Hike Name</label>
                <input placeholder='Hike Name' name="name" type='text' onChange={this.handleChange} required/>
              </Form.Field>
              <Form.Field>
                <label>Location</label>
                <input placeholder='Location' name="location" type='text' onChange={this.handleChange} required/>
              </Form.Field>
              <Form.Field>
                <label>Elevation</label>
                <input placeholder='Elevation' name="elevation" type='number' onChange={this.handleChange} required/>
              </Form.Field>
              <Form.Field>
                <label>Terrain</label>
                <input placeholder='Terrain' name="terrain" type='text' onChange={this.handleChange} required/>
              </Form.Field>
                <Button type='submit' value='Submit'>Submit</Button>
              </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}



// import React from 'react'

// export class UpdateForm extends React.Component{
//   state = {
//     showPreview: false
//   }

//   toggleUpdate = (event) => {
//     event.preventDefault()
//     const preview = !this.state.showPreview
//     this.setState({ showPreview: preview })
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }