import React from 'react'
import "./firstpart.css"
import { Col, Container, Row } from 'react-bootstrap'

const Firstpart = () => {
  return (
    <section id='first'>
        <Container>
            <Row>
            <Col lg={{span:6, offset:3}}>
          <div className="two">
            <h2>Donate Today</h2>
            <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
         
          </div>
          </Col>
            </Row>

            <Row>
                <Col lg={2}>
                <div className="three">
                    <h2>100tk</h2>
                </div>
                </Col>
                <Col lg={2}>
                <div className="three">
                    <h2>200tk</h2>
                </div>
                </Col>
                <Col lg={2}>
                <div className="three">
                    <h2>500tk</h2>
                </div>
                </Col>
                <Col lg={2}>
                <div className="three">
                    <h2>1000tk</h2>
                </div>
                </Col>
                <Col lg={2}>
                <div className="three">
                    <h2>2000tk</h2>
                </div>
                </Col>
                <Col lg={2}>
                <div className="three">
                    <h2>5000tk</h2>
                </div>
                </Col>
            </Row>

            <div className="four">
                <input type="text" placeholder='Other Amount (Taka)' />
               
            </div>
           <div className="five">
           <button>Donate Now</button>

           </div>
           
        </Container>
    </section>
  )
}

export default Firstpart
