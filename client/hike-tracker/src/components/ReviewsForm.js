import React from 'react';
import { Modal, Form, Button, Icon } from 'semantic-ui-react';

export class ReviewsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({[name]: event.target.value})
  }

  formSubmit = (event) => {
    event.preventDefault()
    const url = 'https://tower-project.herokuapp.com/reviews'
    const postData = {
      name: this.state.name,
      difficulty: this.state.difficulty,
      rating: this.state.rating,
      comment: this.state.comment,
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(response => {
        this.props.updatedReview(response)
      })
      .then(this.setState({
        name: '',
        difficulty: '',
        rating: '',
        comment: ''
        }))
      .then(this.closeModal)
  }

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
                <label>Difficulty</label>
                <input placeholder='Difficulty (Out of 10)' name="difficulty" type='number' onChange={this.handleChange} required/>
              </Form.Field>
              <Form.Field>
                <label>Rating</label>
                <input placeholder='Rating (Out of 10)' name="rating" type='number' onChange={this.handleChange} required/>
              </Form.Field>
              <Form.Field>
                <label>Comment</label>
                <input placeholder='Comment' name="comment" type='text' onChange={this.handleChange} required/>
              </Form.Field>
                <Button type='submit' value='Submit'>Submit</Button>
              </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}