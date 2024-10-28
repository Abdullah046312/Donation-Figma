import React from 'react'
import "./thirdpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images4 from "../../assets/images4.png"
import images5 from "../../assets/images5.png"

const Thirdpart = () => {
  return (
    <section id='third'>
        <Container>
            <Row>
           <Col lg={5}>
           <div className="ten">
            <h2>Their lives depend on your donation</h2>
            <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
            <h6>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</h6>
            <button>How to Contribute?</button>
           </div>
           </Col>
           <Col lg={{span:5, offset:1}}>
           <div className="eleven">
            <img src={images4} alt="" />
            
           </div>
           </Col>
            </Row>

            <Row>
            <Col lg={5}>
           <div className="eleven">
            <img src={images5} alt="" />
            
           </div>
           </Col>

           <Col lg={{span:5, offset:1}}>
           <div className="ten">
            <h2>They need us to suvive</h2>
            <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
            <h6>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</h6>
            <button>How to Contribute?</button>
           </div>
           </Col>


            </Row>
        </Container>
    </section>
  )
}

export default Thirdpart
