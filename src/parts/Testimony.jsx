/* eslint-disable no-unused-vars */
import React from 'react'
import Fade from 'react-reveal/Fade'

import TestimonyFrameImg from '../assets/images/testimonial-landingpages-frame.jpg'

import Button from '../elements/Button'
import Star from '../elements/Star'

export default function Testimony({data}) {
  return (
    <Fade bottom>
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{marginRight: 60}}>
          <div className="testimonial-hero">
            <img src={data.imageUrl} alt="Testimonial Image" className="position-absolute" style={{margin: '30px 0 0 30px', zIndex: 1}}/>
            <img src={TestimonyFrameImg} alt="Testimonial Image Frame" className="position-absolute" style={{ margin: '0 30px 30px 0'}}/>
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>
            {data.name}
          </h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button className='btn px-5' style={{marginTop: 40}} hasShadow isPrimary type='link' href={`/testimonial/${data._id}`}>Read Their Story</Button>
          </div>
      </div>
      </div>
    </section>
    </Fade>
  )
}
