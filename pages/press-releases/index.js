import React, { Fragment } from 'react'
import Header from 'components/header/Header'
import Footer from 'components/footer/footer'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Input, InputGroup, Row } from 'reactstrap'
import Image from 'next/image'
import Banner from 'components/banner/Banner'
import RoomOne from "../../assets/images/room1.png"
import RoomTwo from "../../assets/images/room2.png"
import { Link } from 'components'
import { BsArrowRight } from 'react-icons/bs'
import { BiDownArrow } from 'react-icons/bi'
import { FiChevronDown } from 'react-icons/fi'

const Index = () => {
  return (
    <Fragment>
      {/* Header */}
      <section>
        <Header />
      </section>
      {/* Banner */}
      <section className="blog-banner">
        <Banner
          title={"Press Releases"}
          description={
            "Get the latest news and updates on what BOLT has to offer and how we’re crafting our future with our stakeholders. We’re immensely proud of our business and happy to help members of the press communicate our achievements."
          }
        />
      </section>
      {/* Content */}
      <section>
        <Container fluid>
          <Row className="mx-1 md-mx-3 lg-mx-5 p-1 p-md-3 p-lg-5">
            <Col sm={12} md={6} lg={4}>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className=''>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mx-1 md-mx-3 lg-mx-5 p-1 p-md-3 p-lg-5">
            <Col sm={12} md={6} lg={4}>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className=''>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mx-1 md-mx-3 lg-mx-5 p-1 p-md-3 p-lg-5">
            <Col sm={12} md={6} lg={4}>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className=''>
              <Card className='my-card border-0'>
                  <Image alt="Sample" height={""} width={""} src={RoomTwo} />
                <CardBody className='bg-[#3D3D3D] text-[#ECECEC] my-card-body'>
                  <div className=''>
                    <p className='font-normal text-sm text-[#F5F5F5] my-4'>Jacqueline Asong</p>
                    <p className='font-semibold text-xl text-[#ECECEC] my-4'>Lessons and insights from 8 years of Pixelgrade</p>
                    <Link href={'/'} className={'font-semibold text-sm d-flex align-items-center gap-2 text-[#61D16A] my-4'}>View more <BsArrowRight/></Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div className='d-flex flex-row justify-center my-12 show-more'>
            <button className='btn d-flex align-items-center gap-2 bg-[#ECECEC] text-[#3D3D3D]'>Show more <span><FiChevronDown/></span></button>
          </div>
        </Container>
      </section>
      {/* Investors Email Alerts */}
      <section className="latest-updates-form bg-[#3D3D3D] d-flex align-items-center">
        <Container fluid>
          <Row className="mx-0 mx-md-2 mx-lg-5">
            <Col sm={12} md={12} lg={12} xl={12}>
              <p className="font-bold text-4xl text-[#FFFFFF]">
                Investors Email Alerts
              </p>
              <p className="font-normal text-base text-[#FFFFFF] my-12">
                Keep track of investment news and updates with BOLT&apos;s email
                alerts.
              </p>
              <p className="font-normal text-base text-[#FFFFFF] my-2">
                Email Address
              </p>
            </Col>
            <Col sm={12} md={10} lg={10} xl={8}>
              <Row className="connect-form">
                <Col
                  className="d-flex align-items-stretch"
                  xs={12}
                  xl={6}
                  lg={6}
                >
                  <InputGroup>
                    <Input placeholder="Enter your email address" />
                    <Button className="bg-[#14A800]">Submit</Button>
                  </InputGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Footer */}
      <section>
        <Footer />
      </section>
    </Fragment>
  );
}

export default Index