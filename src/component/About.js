import React from 'react'
import Dogne from "./img-logo/dogneji.jpg"
import Kunal from './img-logo/kunaldogne-removebg-preview.png'
import "./Style.css"


export default function About() {
  return (
    <>

      <h1 className='about-text' >ABOUT-US</h1>
      <div className='main'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="dogneji">
                <div id='div-name' >


                  <img src={Dogne} alt="" width={'500px'} height={'500px'} id='img-about' />

                  <div className="row" id='name'>
                    <div className="col-md-12">

                      <h1  >Dr. Ramkishor Dogne</h1>
                      <button id='btn-message' >View Message</button>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h1>Dr. Ramkishor Dogne</h1>
                  <h2>From the Desk of the Founder</h2>
                  <p>As the Founder of the society I am very happy to share thoughts with you.
                    Truly inspired by the visions of the eminent educationists of our country
                    and rest of the globe, we have decided to come up with a significant and
                    creative step in school education. I am very delighted that you are considering
                    “Vision International Public School” as a place of learning and growth for your
                    child. We will be dedicated to inculcate strong moral values, qualities, honesty,
                    discipline, creativity, benevolence beside academic excellence.
                    We seek your vital corporation and a great support for all time to accomplish the high standard.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">


              <div className="dogneji">
                <div id='div-name' >
                  <img src={Kunal} alt="" width={'500px'} height={'500px'} id='img-about' />
                  <div className="row" id='name'>
                    <div className="col-md-12">

                      <h1 className='ms-5' > Kunal Dogne</h1>
                      <button id='btn-message' >View Message</button>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h1>Kunal Dogne</h1>
                  <h2>From the Desk of the Director</h2>
                  <p>As the Founder of the society I am very happy to share thoughts with you.
                    Truly inspired by the visions of the eminent educationists of our country
                    and rest of the globe, we have decided to come up with a significant and
                    creative step in school education. I am very delighted that you are considering
                    “Vision International Public School” as a place of learning and growth for your
                    child. We will be dedicated to inculcate strong moral values, qualities, honesty,
                    discipline, creativity, benevolence beside academic excellence.
                    We seek your vital corporation and a great support for all time to accomplish the high standard.</p>
                </div>
              </div>

            </div>


            <div class="carousel-item" data-bs-interval="3000">

              <div className="dogneji">
                <div id='div-name' >
                  <img src='' alt="" width={'500px'} height={'500px'} id='img' />
                  <div className="row" id='name'>
                    <div className="col-md-12">

                      <h1  > Principle sir</h1>
                      <button id='btn-message' >View Message</button>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h1>Principal</h1>
                  <h2>From the Desk of the Principle</h2>
                  <p>As the Founder of the society I am very happy to share thoughts with you.
                    Truly inspired by the visions of the eminent educationists of our country
                    and rest of the globe, we have decided to come up with a significant and
                    creative step in school education. I am very delighted that you are considering
                    “Vision International Public School” as a place of learning and growth for your
                    child. We will be dedicated to inculcate strong moral values, qualities, honesty,
                    discipline, creativity, benevolence beside academic excellence.
                    We seek your vital corporation and a great support for all time to accomplish the high standard.</p>
                </div>
              </div>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
