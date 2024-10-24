/* eslint-disable no-unused-vars */
import React from 'react'

import Button from '../elements/Button'

export default function Categories({data}) {
  return data.map((category, index1) => {
    return (
      <>
        <section className="container" key={`category-${index1}`}>
          <h4 className="mb-3">{category.name}</h4>
          <div className="container-grid">
            {
              category.items.length === 0 ? <div className="row">
                <div className="col-auto align-items-center"> 
                  There is no property at this category
                </div></div> : category.items.map((item, index2) => {
                return (
                  <>
                    <div key={`category-${index1}-items-${index2}`} className={`item column-3 row-1`}>
                      <div className="card card-featured">
                        <div className={`${item.isPopular ? `tag` : `d-none`}`}>
                          <span className="font-weight-light">Popular <span>Choice</span></span>
                        </div>
                        <figure className="img-wrapper" style={{height: 180}}>
                          <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                        </figure>
                        <div className="meta-wrapper">
                          <Button type="link" className="streched-link d-block text-white" href={`/properties/${item._id}`}>
                            <h5 className="h4">{item.name}</h5>
                          </Button>
                          <span>{item.city}, {item.country}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </section>
    </>
  )})
}
