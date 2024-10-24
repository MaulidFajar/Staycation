/* eslint-disable no-unused-vars */
import React from 'react'

import TestimonyFrameImg from '../assets/images/testimonial-landingpages-frame.jpg'

import Button from '../elements/Button'

export default function Testimony({data}) {
  return (
    <section className="container ">
      <div className="row align-items-center">
        <div className="col-6">
          <img src={data.imageUrl} alt="Testimonial Image" className="img-fluid position-absolute" style={{ width: 366, height: 502, margin: '30px 0 0 30px', zIndex: 1}}/>
          <img src={TestimonyFrameImg} alt="Testimonial Image Frame" className="img-fluid position-absolute" style={{width: 366, height: 502, margin: '0 -15px -15px 0'}}/>
        </div>
        <div className="col-6">
          <h4>{data.name}</h4>
          <h5 className="font-weight-light">Rate : <span>{data.rate}</span></h5>
          <h5 className="h2 font-weight-light line-height-2 my-3">{data.content}</h5>
          <p className="text-gray-500">{data.familyName}, {data.familyOccupation}</p>
          <Button className="btn px-5" style={{marginTop: 40}} type='link' href={`/testimonial/${data._id}`} isPrimary hasShadow>Read Their Story</Button>
        </div>
      </div>
    </section>
  )
}
