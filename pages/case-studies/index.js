import React, { Fragment } from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import { Col, Container, Input, Row } from 'reactstrap';
import Image from 'next/image';
import StudyOne from '../../assets/images/study1.png'
import StudyTwo from '../../assets/images/study2.png'
import { Link } from 'components';
import { BsArrowRight } from 'react-icons/bs';

import ProfileOneImg from '../../assets/images/profile-one.png'
import ProfileTwoImg from '../../assets/images/profile-two.png'
import ProfileThreeImg from '../../assets/images/profile-three.png'
 
const Index = () => {
  return (
    <Fragment>
      {/* Header */}
      <section>
        <Header />
      </section>
      {/* Banner with Heading & Home Icon */}
      <section className="case-studies-banner bg-[#0F0F0F] text-[#ffff]">
        <Container fluid>
          <Row className='justify-center'>
            <Col sm="12" md="10" lg="12" className=''>
              <p className='solutions-title text text-center'>Case Studies & Stories</p><br/>
              <p className="text text-center text-xl font-normal text-[#FFFFFF]">By creating a visual guide along the way, the designer or developer can get input from the other people involved in<br/> the website such as the customer, their manager, and other members of the team.</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Detailed Sections */}
      <div className='flex justify-center font-bold text-[42px] my-8 text-[#12141D] p-4'>Trusted by the world&apos;s leading teams</div>
      {/* Section One */}
      <section className=''>
        <Container className='mx-auto'>
          <Row className='p-2 p-md-3 p-lg-5'>
            <Col md="6" sm="12" lg="6">
            <div className='font-semibold text-2xl text-[#3D3D3D]'>How WeWork Increased Blog Traffic by 127% with BOLT</div>
            <Row className=''>
             <Col lg={2} className={""}>
              <div className='mt-4'>
                <Image src={ProfileOneImg} alt={'profile1'}/>
              </div>
             </Col> 
             <Col lg={10}>
             <div className='my-4'>
              <p className='font-normal text-base text-[#3D3D3D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='my-4'>
              <Link className={"d-flex align-items-center gap-2 text-[#61D16A]"} href={'/'}>Read more <BsArrowRight/></Link>
            </div>
            <div>
              <p className='font-semibold text-base text-[#3D3D3D]'>Alex Johnson</p>
              <p className='font-normal text-sm text-[#3D3D3D]'>Senior Director of BCIT</p>
            </div>
            </Col> 
            </Row>
            </Col>
            <Col md="6" sm="12" lg="6" className='d-flex flex-col justify-center'>
              <div>
                <Image
                  src={StudyOne}
                  alt={"first image"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section Two */}
      <section>
        <Container className='mx-auto'>
          <Row className='p-2 p-md-3 p-lg-5'>
            <Col md="6" sm="12" lg="6" className='d-flex flex-col justify-center'>
              <div>
                <Image
                  src={StudyTwo}
                  alt={"second image"}
                />
              </div>
            </Col>
            <Col md="6" sm="12" lg="6">
            <div className='font-semibold text-2xl text-[#3D3D3D]'>How WeWork Increased Blog Traffic by 127% with BOLT</div>
            <Row className=''>
              <Col lg={2} className={""}>
              <div className='mt-4'>
                <Image src={ProfileTwoImg} alt={'profile1'}/>
              </div>
              </Col> 
              <Col lg={10}>
              <div className='my-4'>
              <p className='font-normal text-base text-[#3D3D3D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='my-4'>
              <Link className={"d-flex align-items-center gap-2 text-[#61D16A]"} href={'/'}>Read more <BsArrowRight/></Link>
            </div>
            <div>
              <p className='font-semibold text-base text-[#3D3D3D]'>Alex Johnson</p>
              <p className='font-normal text-sm text-[#3D3D3D]'>Senior Director of BCIT</p>
            </div>
            </Col> 
            </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section Three */}
      <section>
        <Container className='mx-auto'>
          <Row className='p-2 p-md-3 p-lg-5'>
            <Col md="6" sm="12" lg="6">
            <div className='font-semibold text-2xl text-[#3D3D3D]'>How WeWork Increased Blog Traffic by 127% with BOLT</div>
            <Row className=''>
              <Col lg={2} className={""}>
              <div className='mt-4'>
                <Image src={ProfileThreeImg} alt={'profile1'}/>
              </div>
              </Col> 
              <Col lg={10}>
              <div className='my-4'>
              <p className='font-normal text-base text-[#3D3D3D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='my-4'>
              <Link className={"d-flex align-items-center gap-2 text-[#61D16A]"} href={'/'}>Read more <BsArrowRight/></Link>
            </div>
            <div>
              <p className='font-semibold text-base text-[#3D3D3D]'>Alex Johnson</p>
              <p className='font-normal text-sm text-[#3D3D3D]'>Senior Director of BCIT</p>
            </div>
            </Col> 
            </Row>
            </Col>
            <Col md="6" sm="12" lg="6" className='d-flex flex-col justify-center'>
              <div>
                <Image
                  src={StudyTwo}
                  alt={"third image"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Investors Email Alerts */}
      <section className="case-studies-query-form bg-[#0F0F0F] d-flex align-items-center">
      <Container>
      <div className="row justify-center">
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-10'>
          <p className="font-bold text-4xl text text-center text-[#FFFFFF]">
            We&apos;re Here to Answer Your Questions
          </p>
          <p className="font-normal text-base text text-center text-[#FFFFFF] mt-4">
            Fill out the form below with your full name, email address, and questions.
          </p>
        </div>
        <div className='col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8'>
            <Row className="mt-4 connect-form">
              <Col xs={12} xl={6} lg={6}>
                <Input className="mb-3" placeholder="First and last name"></Input>
              </Col>
              <Col className='' xs={12} xl={6} lg={6}>
                <Input className="mb-3" placeholder="Email"></Input>
              </Col>
              <Col className='' xs={12} xl={12} lg={12}>
                <Input className='mb-3' bsSize='lg' placeholder="Name" type="textarea" rows="3"></Input>
              </Col>
              <Col className="d-flex justify-content-end mt-4" xs={12} xl={12}>
                <button className='bg-[#14A800] btn text-white w-40 h-12'>Submit</button>
              </Col>
            </Row>
        </div>
      </div>
    </Container>
      </section>
      {/* Footer */}
      <section>
        <Footer />
      </section>
    </Fragment>
  )
}

export default Index