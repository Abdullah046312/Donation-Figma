import React from 'react'
import "./fourthpart.css"
import { Col, Container, Row } from 'react-bootstrap'


const Fourthpart = () => {
  return (
    <section id='four'>
        <Container>
            <Row>
            <Col lg={{span:6, offset:3}}>
          <div className="six">
            <h2>Get My Updates</h2>
            <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
         
          </div>
          </Col>
            </Row>

            <Row>
              <Col lg={{span:8, offset:2}}>
              <div className="tharteen">
                <input type="text" placeholder='Email'/>
                <button>Subscribe</button>

              </div>
              
              </Col>
            </Row>

           
        </Container>
    </section>
  )
}

export default Fourthpart
