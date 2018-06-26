import React from 'react';
import { ReviewsComp } from './ReviewsComp';
import { BarChart } from './BarChart';

export class Reviews extends React.Component {


  render() {
    return (
      <div className='app-main'>
        <div className='sub-header'>
          <h2 className='sub-h2'>Add a hike and review it!</h2>
        </div>
        <div className='content'>
          {this.props.reviews.map((reviews, index) => {
            return <ReviewsComp key={index} updatedReview={this.props.updatedReview} reviews={reviews}/>
          })}
        </div>
        <BarChart reviews={this.props.reviews}/>
      </div>
    )
  }
}