import Banner from 'components/banner/Banner'
import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProfileImage from '../../assets/images/ProfileImage.png'

const Index = () => {
  return (
    <Fragment>
      <section>
        <Header/>
      </section>
      <section className='banner'>
        <Banner
        title={"People Speak About Us"}
        description={"By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team."}
        />
      </section>
      <section className='p-4'>
        <Container fluid>
          <Row>
            <Col lg={5} className=''>
              <Row className='my-4'>
                <Card>
                  <CardBody className=''>
                    <div>
                      <p className='font-normal text-base text-[#3D3D3D]'>Orci pellentesque in velit at montes, lorem. Senectus vel, felis vitae, proin nisi tristique velit. Diam sagittis, eu pellentesque et. Netus sed neque, molestie consectetur eu, sit at. Mattis eros amet diam sit lacus, vivamus semper suspendisse. Neque, quam vestibulum orci morbi duis amet, gravida vestibulum amet. Enim.</p>
                    </div>
                    <div className='flex flex-row space-x-4 my-4'>
                      <div>
                        <Image src={ProfileImage} alt={'profile'}/>
                      </div>
                      <div className=''>
                        <p>RutherFord Brannan</p>
                        <p>Founder of Google Inc.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Row>
              <Row className='my-4'>
                <Card>
                  <CardBody className=''>
                    <div>
                      <p className='font-normal text-base text-[#3D3D3D]'>Orci pellentesque in velit at montes, lorem. Senectus vel, felis vitae, proin nisi tristique velit. Diam sagittis, eu pellentesque et. Netus sed neque, molestie consectetur eu, sit at. Mattis eros amet diam sit lacus, vivamus semper suspendisse. Neque, quam vestibulum orci morbi duis amet, gravida vestibulum amet. Enim.</p>
                    </div>
                    <div className='flex flex-row space-x-4 my-4'>
                      <div>
                        <Image src={ProfileImage} alt={'profile'}/>
                      </div>
                      <div className=''>
                        <p>RutherFord Brannan</p>
                        <p>Founder of Google Inc.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Row>
              <Row className='my-4'>
                <Card>
                  <CardBody className=''>
                    <div>
                      <p className='font-normal text-base text-[#3D3D3D]'>Orci pellentesque in velit at montes, lorem. Senectus vel, felis vitae, proin nisi tristique velit. Diam sagittis, eu pellentesque et. Netus sed neque, molestie consectetur eu, sit at. Mattis eros amet diam sit lacus, vivamus semper suspendisse. Neque, quam vestibulum orci morbi duis amet, gravida vestibulum amet. Enim.</p>
                    </div>
                    <div className='flex flex-row space-x-4 my-4'>
                      <div>
                        <Image src={ProfileImage} alt={'profile'}/>
                      </div>
                      <div className=''>
                        <p>RutherFord Brannan</p>
                        <p>Founder of Google Inc.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Row>
            </Col>
            <Col lg={7}>
            <Row className='my-4'>
              <Col>
                <Card>
                  <CardBody className=''>
                    <div>
                      <p className='font-normal text-base text-[#3D3D3D]'>Orci pellentesque in velit at montes, lorem. Senectus vel, felis vitae, proin nisi tristique velit. Diam sagittis, eu pellentesque et. Netus sed neque, molestie consectetur eu, sit at. Mattis eros amet diam sit lacus, vivamus semper suspendisse. Neque, quam vestibulum orci morbi duis amet, gravida vestibulum amet. Enim.</p>
                    </div>
                    <div className='flex flex-row space-x-4 my-4'>
                      <div>
                        <Image src={ProfileImage} alt={'profile'}/>
                      </div>
                      <div className=''>
                        <p>RutherFord Brannan</p>
                        <p>Founder of Google Inc.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className='my-4'>
              <Col>
              <Card>
                  <CardBody className=''>
                    <div>
                      <p className='font-normal text-base text-[#3D3D3D]'>Orci pellentesque in velit at montes, lorem. Senectus vel, felis vitae, proin nisi tristique velit. Diam sagittis, eu pellentesque et. Netus sed neque, molestie consectetur eu, sit at. Mattis eros amet diam sit lacus, vivamus semper suspendisse. Neque, quam vestibulum orci morbi duis amet, gravida vestibulum amet. Enim.</p>
                    </div>
                    <div className='flex flex-row space-x-4 my-4'>
                      <div>
                        <Image src={ProfileImage} alt={'profile'}/>
                      </div>
                      <div className=''>
                        <p>RutherFord Brannan</p>
                        <p>Founder of Google Inc.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col>
              <Card>
                  <CardBody className=''>
                    <div>
                      <p className='font-normal text-base text-[#3D3D3D]'>Orci pellentesque in velit at montes, lorem. Senectus vel, felis vitae, proin nisi tristique velit. Diam sagittis, eu pellentesque et. Netus sed neque, molestie consectetur eu, sit at. Mattis eros amet diam sit lacus, vivamus semper suspendisse. Neque, quam vestibulum orci morbi duis amet, gravida vestibulum amet. Enim.</p>
                    </div>
                    <div className='flex flex-row space-x-4 my-4'>
                      <div>
                        <Image src={ProfileImage} alt={'profile'}/>
                      </div>
                      <div className=''>
                        <p>RutherFord Brannan</p>
                        <p>Founder of Google Inc.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>              
              </Col>
            </Row>
            <Row className='my-4'>
              <Col>
                <Card>
                  <CardBody className=''>
                    <div>
                      <p className='font-normal text-base text-[#3D3D3D]'>Orci pellentesque in velit at montes, lorem. Senectus vel, felis vitae, proin nisi tristique velit. Diam sagittis, eu pellentesque et. Netus sed neque, molestie consectetur eu, sit at. Mattis eros amet diam sit lacus, vivamus semper suspendisse. Neque, quam vestibulum orci morbi duis amet, gravida vestibulum amet. Enim.</p>
                    </div>
                    <div className='flex flex-row space-x-4 my-4'>
                      <div>
                        <Image src={ProfileImage} alt={'profile'}/>
                      </div>
                      <div className=''>
                        <p>RutherFord Brannan</p>
                        <p>Founder of Google Inc.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section></section>
      <section>
        <Footer/>
      </section>
    </Fragment>
  )
}

export default Index