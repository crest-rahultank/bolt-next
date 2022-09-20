import React,{ Fragment } from 'react'
import Image from 'next/image'

import { Button, Col, Container, Row } from 'reactstrap'

import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import ScooterSVG from "../../assets/svg/scooter/scooter.svg";
import ChartSVG from "../../assets/svg/headers/Chart.svg";
import ChargerSVG from "../../assets/svg/charger/charger.svg";
import SpiralSVG from "../../assets/svg/spirallines/spirallines.svg";
import { BsArrowRight, BsCart, BsFillCheckCircleFill } from 'react-icons/bs'

const location = [
  "Use our BOLT app to locate the nearest charging point in 300+ cities across the country",
  "Book a charger on the go with our app"
]

const charge = [
  "Book another charger on the road and pay for it through the app",
  "Add your charger to the network with the app and let others pay you to use it"
]

const ride = [
  "Experience the convenience of charging points being wherever you are, even in rural locations.",
  "Develop individual ride patterns by customizing your vehicle parameters depending on the trip."
]

const Info = () => {
  return (
  <Fragment>
    <Header/>
    {/* Banner with Heading & Home Icon */}
    <section className="banner">
        <Container fluid>
          <Row className='align-items-center'>
            <Col sm="8" md="8" lg="8" className="banner-content-sm">
            <span className='header-title'>How to Charge</span>
            <p className="banner-content-description">Charge your EV overnight using BOLT&apos;s convenient home EV charging point.<br/>Never pay a premium for using a public charging station again!</p>
            </Col>
            <Col sm="4" md="4" lg="4" className="d-none d-sm-block ">
              <Image
                src={ScooterSVG}
                alt={"Scooter Logo"}
                width={300}
                height={200}
                layout='responsive'
              />
            </Col>
          </Row>
        </Container>
    </section>
    {/* Detailed Sections */}
    <section className='find-a-location'>
      {/* Find a Location */}
      <Container className='mx-auto'>
        <Row>
        <Col md="6" sm="12" lg="6" className='d-none d-sm-block'>
            <Image
              src={ChartSVG}
              alt={"Chart"}
              width={300}
              height={200}
              layout='responsive'
            />
          </Col>
          <Col md="6" sm="12" lg="6">
          <Col md="6" sm="12" lg="6" className='d-block d-sm-none'>
            <Image
              src={ChartSVG}
              alt={"Chart"}
              width={300}
              height={200}
              layout='responsive'
            />
          </Col>
            <div className='content-header'>Find a <span className="rounded-divider">Location</span></div>
            <div className='content-blog-detail'>
              <p>Can&apos;t find a charging location for your EV? BOLT is exactly what you need! The BOLT Charging Network has 15,000+ locations across India including rural locations, so you&apos;re never far away from a charging station. </p>
              <p>Our smart, universal charging points power our network and are available for purchase.</p>
              <p>Travel all over India without worrying about running out of juice. Use our BOLT app to book a charging point before anyone else!</p>
              <ul>
              {location.map((list) => {
                return <li key='id' className='font-bold text-lg text-[#3D3D3D] d-flex gap-4 align-items-center mb-4'><span><BsFillCheckCircleFill color='#61D16A'/></span>{list}</li>
              } )}
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Discover Charges <span><BsArrowRight/></span> </Button>
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='scan-pay-charge shade'>
    {/*Scan Pay Charge */}
      <Container className='mx-auto shade'>
        <Row>
        <Col md="6" sm="12" lg="6">
            <div className='content-header'>Scan - Pay - <span className="rounded-divider">Charge</span></div>
            <div className='content-blog-detail'>
              <p>Never struggle with booking and paying for a charging point again! Install a BOLT charging point and share it with other drivers to help expand the EV infrastructure.</p>
              <p>Download the app to join our safe and connected EV charging network. We’ve streamlined the payment process to make your experience as seamless as possible. </p>
              <p>Just Scan- Pay - Charge, and you’re ready to get cruising with BOLT!</p>
              {charge.map((list) => {
                return <li key='id' className='font-bold text-lg text-[#3D3D3D] d-flex gap-4 align-items-center mb-4'><span><BsFillCheckCircleFill color='#61D16A'/></span>{list}</li>
              } )}
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Download App <span><BsArrowRight/></span> </Button>
            </div>
          </Col>
          <Col md="6" sm="12" lg="6">
            <Image
              src={ChartSVG}
              alt={"Chart"}
              width={300}
              height={200}
              layout='responsive'
            />
          </Col>
        </Row>
      </Container>
    </section>
    <section className='enjoy-your-ride'>
      {/* Enjoy Your Ride */}
      <Container className='mx-auto'>
        <Row>
          <Col md="6" sm="12" lg="6" className='d-none d-sm-block'>
            <Image
              src={ChartSVG}
              alt={"Chart"}
              width={300}
              height={200}
              layout='responsive'
            />
          </Col>
          <Col md="6" sm="12" lg="6">
          <Col md="6" sm="12" lg="6" className='d-block d-sm-none'>
            <Image
              src={ChartSVG}
              alt={"Chart"}
              width={300}
              height={200}
              layout='responsive'
            />
          </Col>
            <div className='content-header'>Enjoy Your<span className="rounded-divider">Ride</span></div>
            <div className='content-blog-detail'>
              <p>Avoid running out of charge before you reach your next charging station. Get accurate, real-time, and visible analytics from your EV. </p>
              <p>BOLT lets you monitor and control various components of your EV like the controller, battery management system (BMS), motor, and even vehicle peripherals!</p>
              <p>Stream all your data to the cloud in real-time. You&apos;ll get all the information you need to calculate your range and charging rate. Now you&apos;re free to go wherever you want!</p>
              {ride.map((list) => {
                return <li key='id' className='font-bold text-lg text-[#3D3D3D] d-flex gap-4 align-items-center mb-4'><span><BsFillCheckCircleFill color='#61D16A'/></span>{list}</li>
              } )}
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Get Started <span><BsArrowRight/></span> </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Fancy Banner */}
    <section className='bg-[#3FD18E]'>
      <Container className='mx-auto'>
        <Row>
          <Col lg="6">
            <div className=''>
              {/* <Image className='spiral' src={SpiralSVG} alt={'spiral-lines'}></Image>   */}
              <Image src={ChargerSVG} alt={'charger'} height={390} width={216}></Image>  
            </div>
          </Col>
          <Col lg="6">
          <div className='content-header'>Join India&apos;s Largest EV Charging Network</div>
            <div >
              <p className='font-bold text-lg text-[#3D3D3D] mb-4'>Get your personal BOLT EV charging point!</p>
              <div className='d-flex mb-4'>
              <p className='text-[#3D3D3D] font-bold text-4xl'><span></span>3500</p><p className='text-[#3D3D3D] font-bold text-5xl ml-5'>4199</p>
              </div>
              <button className='btn d-flex align-items-center gap-2 mb-4 bg-[#ECECEC] text-base font-semibold text-[#0F0F0F]'>Order Now<span><BsCart/></span> </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Footer */}
    <section>
      <Footer/>
    </section>
  </Fragment>
  )
}

export default Info