import React from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap'

const Form = () => {
  return (
    <Container>
      <div className="row justify-center">
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-10'>
          <p className="font-bold text-4xl text text-center text-[#FFFFFF]">
            Connect With Your Advisor
          </p>
          <p className="font-normal text-base text text-center text-[#FFFFFF] mt-4">
            Fill out the form below with your full name, email address, and
            inquiry.
          </p>
        </div>
        <div className='col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8'>
            <Row className="mt-4 connect-form">
              <Col xs={12} xl={6} lg={6}>
                <Input className="mb-3" placeholder="Your Full Name"></Input>
              </Col>
              <Col className='' xs={12} xl={6} lg={6}>
                <Input className="mb-3" placeholder="Email"></Input>
              </Col>
              <Col className='' xs={12} xl={12} lg={12}>
                <Input className='mb-3' bsSize='lg' placeholder="Message" type="textarea" rows="3"></Input>
              </Col>
              <Col className="d-flex justify-content-end mt-4" xs={12} xl={12}>
                <button className='bg-[#14A800] btn text-white w-40 h-12'>Submit</button>
              </Col>
            </Row>
        </div>
      </div>
    </Container>
  );
}

export default Form