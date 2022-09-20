import Banner from 'components/banner/Banner'
import Footer from 'components/footer/footer'
import Form from 'components/form/Form'
import Header from 'components/header/Header'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CardImg from '../../assets/images/card-img.png'

const Industries = () => {
  return (
    <Fragment>
      <Header/>
      {/* banner */}
      <section className='banner blog-banner'>
      <Banner
      title="Discover Our Industries"
      description="By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team."
      />
      </section>
      
      {/* card */}
      <section>
        <Container fluid className='p-6 mx-auto'>
          <Row className='mb-8'>
            <Col sm="12" md="6" lg="4">
              <Card>
              <Image
                src={CardImg}
                alt={"Card cap"}
                width={405.33}
                height={168}
              />
              <CardBody>
                <div>
                  <p className='text-[#3D3D3D] font-bold text-2xl mb-4'>
                    For Fleet Operators
                  </p>
                  <p className='text=[#3D3D3D] text-base font-normal mb-4'>
                    A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                  </ul>
                </div>
                <div className='d-flex align-items-center gap-2 text-[#14A800] mt-10 justify-center'>
                  <Link href={""} passHref={true}>
                    Learn more 
                  </Link><span><BsArrowRight/></span>
                </div>
              </CardBody> 
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
              <Card>
              <Image
                src={CardImg}
                alt={"Card cap"}
                width={405.33}
                height={168}
              />
              <CardBody>
                <div>
                  <p className='text-[#3D3D3D] font-bold text-2xl mb-4'>
                    For Fleet Operators
                  </p>
                  <p className='text=[#3D3D3D] text-base font-normal mb-4'>
                    A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                  </ul>
                </div>
                <div className='d-flex align-items-center gap-2 text-[#14A800] mt-10 justify-center'>
                  <Link href={""} passHref={true}>
                    Learn more 
                  </Link><span><BsArrowRight/></span>
                </div>
              </CardBody> 
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
              <Card>
              <Image
                src={CardImg}
                alt={"Card cap"}
                width={405.33}
                height={168}
              />
              <CardBody>
                <div>
                  <p className='text-[#3D3D3D] font-bold text-2xl mb-4'>
                    For Fleet Operators
                  </p>
                  <p className='text=[#3D3D3D] text-base font-normal mb-4'>
                    A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                  </ul>
                </div>
                <div className='d-flex align-items-center gap-2 text-[#14A800] mt-10 justify-center'>
                  <Link href={""} passHref={true}>
                    Learn more 
                  </Link><span><BsArrowRight/></span>
                </div>
              </CardBody> 
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" lg="4">
              <Card>
              <Image
                src={CardImg}
                alt={"Card cap"}
                width={405.33}
                height={168}
              />
              <CardBody>
                <div>
                  <p className='text-[#3D3D3D] font-bold text-2xl mb-4'>
                    For Fleet Operators
                  </p>
                  <p className='text=[#3D3D3D] text-base font-normal mb-4'>
                    A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                  </ul>
                </div>
                <div className='d-flex align-items-center gap-2 text-[#14A800] mt-10 justify-center'>
                  <Link href={""} passHref={true}>
                    Learn more 
                  </Link><span><BsArrowRight/></span>
                </div>
              </CardBody> 
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
              <Card>
              <Image
                src={CardImg}
                alt={"Card cap"}
                width={405.33}
                height={168}
              />
              <CardBody>
                <div>
                  <p className='text-[#3D3D3D] font-bold text-2xl mb-4'>
                    For Fleet Operators
                  </p>
                  <p className='text=[#3D3D3D] text-base font-normal mb-4'>
                    A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                  </ul>
                </div>
                <div className='d-flex align-items-center gap-2 text-[#14A800] mt-10 justify-center'>
                  <Link href={""} passHref={true}>
                    Learn more 
                  </Link><span><BsArrowRight/></span>
                </div>
              </CardBody> 
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
              <Card>
              <Image
                src={CardImg}
                alt={"Card cap"}
                width={405.33}
                height={168}
              />
              <CardBody>
                <div>
                  <p className='text-[#3D3D3D] font-bold text-2xl mb-4'>
                    For Fleet Operators
                  </p>
                  <p className='text=[#3D3D3D] text-base font-normal mb-4'>
                    A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                    <li className='d-flex align-items-center gap-2 font-semibold text-base mb-4'><span><BsCheckCircleFill className='text-[#14A800]'/></span>Reduce the barrier to sale for customers</li>
                  </ul>
                </div>
                <div className='d-flex align-items-center gap-2 text-[#14A800] mt-10 justify-center'>
                  <Link href={""} passHref={true}>
                    Learn more 
                  </Link><span><BsArrowRight/></span>
                </div>
              </CardBody> 
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* advisor form */}\
      <section className='bg-[#3D3D3D] advisor-form pt-3 pt-md-5'>
        <Form/>
      </section>
      <Footer/>
    </Fragment>
  )
}

export default Industries