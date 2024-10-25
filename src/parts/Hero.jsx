/* eslint-disable no-unused-vars */
import React from 'react'
import Fade from 'react-reveal/Fade'

import ImageHero from "../assets/images/hero-img.jpg";
import ImageHeroFrame from "../assets/images/hero-img-frame.jpg";
import IconCities from "../assets/images/icons/ic_cities.svg";
import IconTravelers from "../assets/images/icons/ic_traveler.svg";
import IconTreasure from "../assets/images/icons/ic_treasure.svg";

import Button from '../elements/Button'

import FormatNumber from '../utils/FormatNumber';

export default function Hero(props) {

  function showMostPicked() {
    window.scrollTo({
        top: props.refMostPicked.current.offsetTop - 30,
        behavior: "smooth"
    })
  }

  return (
    <Fade bottom>
      <section className="container pt-3">
        <div className="row">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold mb-3">
              Forget Busy Work, <br/>
              Start Next Vacation
            </h1>
            <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: '170%'}}>
              We provide what you need to enjoy your 
              holiday with family. Time to make another 
              memorable moments.
            </p>
            <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div className="row" style={{marginTop: '70px'}}>
              <div className="col-auto" style={{marginRight: 35}}>
                <img width="36" height="36" src={IconTravelers} alt={`${props.data.travelers} Travelers`} />
                <h6 className="mt-2">
                  {FormatNumber(props.data.travelers)} <span className="font-weigth-light text-gray-500">travelers</span>
                </h6>
              </div>
              <div className="col-auto" style={{marginRight: 35}}>
                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasure`} />
                <h6 className="mt-2">
                  {FormatNumber(props.data.treasures)} <span className="font-weigth-light text-gray-500">treasure</span>
                </h6>
              </div>
              <div className="col-auto">
                <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
                <h6 className="mt-2">
                  {FormatNumber(props.data.cities)} <span className="font-weigth-light text-gray-500">cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5 pt-3">
            <div style={{width: 520, height: 410, marginTop: '-20px'}}>
              <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1}}/>
              <img src={ImageHeroFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{margin: '0 -15px -15px 0'}}/>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
