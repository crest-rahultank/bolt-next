import React, { Fragment } from 'react'
import { Col, Row, Container } from 'reactstrap'

const Banner = ({title, description}) => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm={12} md={8} lg={8}>
            <h1 className='header-title'>{title}</h1>
            <p className="banner-content-description">{description}</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Banner