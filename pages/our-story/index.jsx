import React,{ Fragment } from 'react'
import Image from 'next/image'

import { Button, Col, Container, Row } from 'reactstrap'

import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import ScooterSVG from "../../assets/svg/scooter/scooter.svg";
import StoryOneSVG from "../../assets/svg/story-2017/Image.svg";
import StoryTwoSVG from "../../assets/svg/story-2019/Image.svg";
import StoryThreeSVG from "../../assets/svg/story-2021/Image.svg";
import ChargerSVG from "../../assets/svg/charger/charger.svg";
import SpiralSVG from "../../assets/svg/spirallines/spirallines.svg";
import { BsArrowRight, BsCart, BsFillCheckCircleFill } from 'react-icons/bs'

const Story = () => {
  return (
    <Fragment>
    <Header/>
    {/* Banner with Heading & Home Icon */}
    <section className="bg-[#0F0F0F] text-[#ffff] p-5">
      <Container fluid>
        <Row className='justify-center'>
          <Col className=''>
            <p className='header-title text text-center'>Our Story</p><br/>
            <p className="text text-center text-xl font-normal text-[#FFFFFF]">BOLT was founded in 2017 by Mohit Yadav and Jyotiranjan Harichandan with the aim of making EVs more accessible<br/> to everyone. At BOLT, we want to help emerging markets fulfill the unique needs of EV ecosystems with higher<br/> densities of 2- and 3-wheeled EVs. We also aim to address the challenges associated with little or poor quality<br/> infrastructure. To do that, we&apos;ve created the world&apos;s largest EV charging infrastructure and an advanced OS for electric<br/> vehicles, tailored for these markets.</p><br/>
            <p className="text text-center text-xl font-normal text-[#FFFFFF] mt-2">
            We&apos;re truly making EVs smart, safe, and connected.
            </p>
          </Col>
        </Row>
      </Container>
      </section>
    {/* Detailed Sections */}
    <section className='2017'>
      {/* 2017 */}
      <Container className='mx-auto'>
        <Row>
          <Col md="6" sm="12" lg="12">
          <div className='jumbo-title'><span className='rounded-divider'>2017</span></div>
          <div className='jumbo-subtitle'>
            <p>BOLT (formerly REVOS) Is Founded</p>
          </div>
          </Col>
          <Col md="6" sm="12" lg="6">
          <div className='content-header'>Beginning Our March Toward a Cleaner, Greener Future </div>
          <div className='content-blog-detail'>
            <p>We recognized how badly India needed cost-effective infrastructure to adopt EVs. Our goal was to create an infrastructure that can grow organically to facilitate change.</p>
            <p>We began creating connected devices with the Internet of Things (IoT), and our initial offering grew widely popular. </p>
            <p>This allowed us to establish partnerships and from there we changed our brand name from REVOS to BOLT.</p>
          </div>
          </Col>
          <Col md="6" sm="12" lg="6" className='d-flex flex-col justify-center'>
            <Image
              src={StoryOneSVG}
              alt={"2017"}
              width={355}
              height={300}
            />
          </Col>
        </Row>
      </Container>
    </section>
    <section className='2019 shade'>
    {/*2019*/}
      <Container className='mx-auto'>
        <Row>   
          <Col md="6" sm="12" lg="12">
          <div className='jumbo-title'><span className='rounded-divider'>2019</span></div>
          <div className='jumbo-subtitle'>
            <p>The Beginnings of the BOLT Charging Network</p>
          </div>
          </Col>      
          <Col md="6" sm="12" lg="6" className='d-flex flex-col justify-center'>
            <Image
              src={StoryTwoSVG}
              alt={"2019"}
              width={355}
              height={300}
            />
          </Col>
          <Col md="6" sm="12" lg="6">
          <div className='content-header'>Building a Smart, Reliable, and Accessible Charging Network</div>
          <div className='content-blog-detail'>
            <p>We were able to create well considered offerings that allowed us to position our technology towards individuals. </p>
            <p>We also managed to reduce the entry point to our technology, providing individuals with convenient residential charging. To do this, we grew the business and scaled our manufacturing and distribution operations. </p>
            <p>We released the BOLT mobile app that enables owners to generate a passive income from their charging solution. This gave people the power to simply scan-pay-charge and generate a passive income. </p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='2021'>
      {/* 2021 */}
      <Container className='mx-auto'>
        <Row>
          <Col md="6" sm="12" lg="12">
          <div className='jumbo-title'><span className='rounded-divider'>2021</span></div>
          <div className='jumbo-subtitle'>
            <p>BOLT Becomes India&apos;s Largest Charging Network</p>
          </div>
          </Col>
          <Col md="6" sm="12" lg="6">
          <div className='content-header'>Get Started with Our Products</div>
          <div className='content-blog-detail'>
            <p>Become part of the BOLT family and access our extensive charging network.</p>
            <p>Never worry about where to charge your EV again! Generate a passive income from your home EV charging device.</p>
          </div>
          </Col>
          <Col md="6" sm="12" lg="6" className='d-flex flex-col justify-center'>
            <Image
              src={StoryThreeSVG}
              alt={"2021"}
              width={355}
              height={300}
            />
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

export default Story