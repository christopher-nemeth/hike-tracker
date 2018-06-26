import React from 'react';
import { Card, Button, Modal, Form, } from 'semantic-ui-react';

export class HikesComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.hikes.id,
      name: this.props.hikes.name,
      location: this.props.hikes.location,
      elevation: this.props.hikes.elevation,
      terrain: this.props.hikes.terrain,
      showModal: false
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  editHike = () => {
    let url = `https://tower-project.herokuapp.com/hikes/${this.props.hikes.id}`
    const putData = {
      name: this.state.name,
      location: this.state.location,
      elevation: this.state.elevation,
      terrain: this.state.terrain,
    }
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(putData),
    })
      .then(response => response.json())
      .then(hike => {
        this.props.updatedHike(hike)
      })
        .then(this.closeModal)
  }

  deleteHike = (id, e) => {
    const url = `https://tower-project.herokuapp.com/hikes/${this.props.hikes.id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(hike => {
        this.props.updatedHike(hike)
      })
  }

   closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const {
      showModal
    } = this.state

    return (
      <div>
        <Card.Group>
          <Card>
            <Card.Content id={this.props.hikes.id}>
              <Card.Header>{this.props.hikes.name}</Card.Header>
              <Card.Meta>{this.props.hikes.location}</Card.Meta>
              <Card.Description>Elevation Gain: {this.props.hikes.elevation} ft</Card.Description>
              <Card.Description>Terrain: {this.props.hikes.terrain}</Card.Description>
              <Button.Group>
                <Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={(e) => {
                  this.setState({ showModal: true })}}>Update</Button>}>
                  <Modal.Header>Update Hike</Modal.Header>
                  <Modal.Content>
                    <Form>
                      <Form.Field>
                        <label>Hike Name</label>
                        <input placeholder='Hike Name' name="name" type='text' value={this.state.name} onChange={this.handleChange} required/>
                      </Form.Field>
                      <Form.Field>
                        <label>Location</label>
                        <input placeholder='Location' name="location" type='text' value={this.state.location} onChange={this.handleChange} required/>
                      </Form.Field>
                      <Form.Field>
                        <label>Elevation</label>
                        <input placeholder='Elevation' name="elevation" type='number' value={this.state.elevation} onChange={this.handleChange} required/>
                      </Form.Field>
                      <Form.Field>
                        <label>Terrain</label>
                        <input placeholder='Terrain' name="terrain" type='text' value={this.state.terrain} onChange={this.handleChange} required/>
                      </Form.Field>
                        <Button type='submit' onClick={this.editHike} >Submit</Button>
                      </Form>
                  </Modal.Content>
                </Modal>
                <Button className='delete' onClick={(e) => this.deleteHike(this.props.hikes.id)}>Delete</Button>
              </Button.Group>
            </Card.Content>
            </Card>
        </Card.Group>
      </div>
    )
  }
}