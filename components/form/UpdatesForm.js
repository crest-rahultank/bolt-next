import React from 'react'
import { Button, Col, Container, Input, InputGroup, Row } from 'reactstrap'

const UpdatesForm = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p className="font-bold text-4xl text-[#FFFFFF]">
            Discover the Latest Updates
          </p>
          <p className="font-normal text-base text-[#FFFFFF] my-8">
            We want to ensure you&apos;re always receiving the latest news and
            updates.
          </p>
          <p className="font-normal text-base text-[#FFFFFF] my-8">
            Sign up below for the best possible user experience!
          </p>
          <p className="font-normal text-base text-[#FFFFFF] my-2">
            Email Address
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
          <Row className="connect-form">
            <Col className="d-flex align-items-stretch" xs={12} xl={6} lg={6}>
              <InputGroup>
                <Input placeholder="Enter your email address" />
                <Button className="bg-[#14A800]">Submit</Button>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default UpdatesForm