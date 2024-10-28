import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import images6 from "../../../assets/images6.png"

const Banner = () => {
  return (
    <section id='banner_main'>
      <Container>
        <Row>
          <Col lg={6}>
          <div className="one">
            <h2>Let’s Help Those Who Are More In Need</h2>
            <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
            <div className="one_main">
            <button>Donate Now</button>
            <h4><i class="fa-solid fa-caret-right"></i> Watch Video</h4>

            </div>
          </div>
          </Col>
          <Col lg={6}>
          <div className="two_main">
            <img src={images6} alt="" />
            
            
          </div>
          </Col>
        </Row>
       
      </Container>
    </section>
  )
}

export default Banner
