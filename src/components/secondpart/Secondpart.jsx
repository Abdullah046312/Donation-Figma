import React from 'react'
import "./secondpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images1 from "../../assets/images1.png"
import images2 from "../../assets/images2.png"
import images3 from "../../assets/images3.png"


const Secondpart = () => {
  return (
    <section id='second'> 
        <Container>
            <Row>
            <Col lg={{span:6, offset:3}}>
          <div className="six">
            <h2>Our Donate Plan</h2>
            <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
         
          </div>
          </Col>
            </Row>

            <Row>
          <Col lg={4}>
          <div className="seven">
            <img src={images1} alt="" />
            <h2>Food for a family</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

          </div>
          </Col>
          <Col lg={4}>
          <div className="eight">
            <img src={images2} alt="" />
            <h2>Shelter for a family</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

          </div>
          </Col>
          <Col lg={4}>
          <div className="nine">
            <img src={images3} alt="" />
            <h2>Education for a child</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

          </div>
          </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Secondpart
