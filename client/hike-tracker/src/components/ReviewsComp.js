import React from 'react';
import { Card, Button, Modal, Form, } from 'semantic-ui-react';

export class ReviewsComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.reviews.id,
      name: this.props.reviews.name,
      difficulty: this.props.reviews.difficulty,
      rating: this.props.reviews.rating,
      comment: this.props.reviews.comment,
      showModal: false
    }
  }


  handleChange = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

   editReview = () => {
    let url = `https://tower-project.herokuapp.com/reviews/${this.props.reviews.id}`
    const putData = {
      name: this.state.name,
      difficulty: this.state.difficulty,
      rating: this.state.rating,
      comment: this.state.comment,
    }
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(putData),
    })
      .then(response => response.json())
      .then(review => {
        this.props.updatedReview(review)
      })
        .then(this.closeModal)
  }

  deleteReview = (id, e) =>{
    const url = `https://tower-project.herokuapp.com/reviews/${this.props.reviews.id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(review => {
        this.props.updatedReview(review)
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
            <Card.Content id={this.props.reviews.id}>
              <Card.Header>{this.props.reviews.name}</Card.Header>
              <Card.Description>Difficulty: {this.props.reviews.difficulty} (out of 10)</Card.Description>
              <Card.Description>Rating: {this.props.reviews.rating} (out of 10)</Card.Description>
              <Card.Description>"{this.props.reviews.comment}"</Card.Description>
              <Button.Group>
                <Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={(e) => {
                  this.setState({ showModal: true })}}>Update</Button>}>
                  <Modal.Header>Update Review</Modal.Header>
                  <Modal.Content>
                    <Form>
                      <Form.Field>
                        <label>Hike Name</label>
                        <input placeholder='Hike Name' name="name" type='text' value={this.state.name} onChange={this.handleChange} required/>
                      </Form.Field>
                      <Form.Field>
                        <label>Difficulty</label>
                        <input placeholder='Difficulty (Out of 10)' name="difficulty" type='number' value={this.state.difficulty} onChange={this.handleChange} required/>
                      </Form.Field>
                      <Form.Field>
                        <label>Rating</label>
                        <input placeholder='Rating (Out of 10)' name="rating" type='number' value={this.state.rating} onChange={this.handleChange} required/>
                      </Form.Field>
                      <Form.Field>
                        <label>Comment</label>
                        <input placeholder='Comment' name="comment" type='text' value={this.state.comment} onChange={this.handleChange} required/>
                      </Form.Field>
                        <Button type='submit' onClick={this.editReview}>Submit</Button>
                      </Form>
                  </Modal.Content>
                </Modal>
                <Button className='delete' onClick={(e) => this.deleteReview(this.props.reviews.id)}>Delete</Button>
              </Button.Group>
            </Card.Content>
            </Card>
        </Card.Group>
      </div>
    )
  }
}