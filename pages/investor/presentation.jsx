import { Link } from 'components'
import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { BsArrowRight, BsArrowRightShort, BsPlayBtn } from 'react-icons/bs'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Input, InputGroup, Row } from 'reactstrap'
import NewsImg from "../../assets/images/news-1.png";
import MediaIMG from "../../assets/images/team.png";
import FlashSVG from '../../assets/svg/flash/bottom-flash.svg'

const Presentation = () => {
  return (
    <Fragment>
      <section>
        <Header />
      </section>
      <section className="banner presentation-banner">
        <Container fluid>
          <Row>
            <Col sm={12} md={8} lg={12}>
              <h1 className="header-title">Company Overview</h1>
            </Col>
          </Row>
          <Row className='p-lg-4'>
            <Col lg={1}></Col>
            <Col lg={5} className={"d-flex align-items-center"}>
              <div className='d-none d-lg-block'>
                <span className='divider d-none d-lg-block'></span>
              </div>
                <p className="banner-content-description">
                  <span className='d-block mb-3'>BOLT has built the largest electric vehicle (EV) charging network, with solutions for every type of business in the ecosystem. </span>
                  <span className='d-block mb-3'>Our EV experts have the technical know-how to make EV charging smarter while offering you the most seamless charging experience, covering EV charging inside and out.</span>
                  <span className='d-block mb-3'>This makes BOLT the best solution for your business to keep your EV customers, employees, visitors, residents, and partners going. </span>
                </p>
            </Col>
            <Col lg={5}>
              <p className="banner-content-description">
                <span className='d-block mb-3'>Our solutions now span residential, commercial, and public solutions. Our BOLT Service provides a complete solution, walks you through everything, and gives you access to BOLT’s commercial tier 24/7 support. </span>
                <span className='d-block mb-3'>Our service team conducts site inspections, helps plan your solution, and implements it. </span>
                <span className='d-block mb-3'>We also provide you with complete control over your fleet or commercially-managed charging points for various locations, like municipal parking, from BOLT’s CRM App.</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* card section */}
      <section>
        <Container fluid>
          <Col className="p-lg-5">
            <Row>
              <Col className="text-center mb-4">
                <div className="content-header">
                  See <span className="rounded-divider">Our Impacts</span> in
                  Number
                </div>
                <div className="text-[#808080] text-lg font-normal">
                  Guerrilla marketing will hit the ground running with
                  powerpoint bunny for or optimize them.
                </div>
              </Col>
            </Row>
            <Row className="flex-nowrap overflow-x-auto">
              <Col sm="12" md="6" lg="3" className="my-card">
                <Card className="my-card">
                  <CardBody>
                    <CardTitle className="card-title">
                      100<span className="text-[#61D16A]">K</span>
                    </CardTitle>
                    <CardSubtitle className="mb-2 card-subtitle" tag="h6">
                      Installations
                    </CardSubtitle>
                    <CardText className="card-text">
                      With high dedication, our designs are always perfectly to
                      the applied container which also pixel
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="3" className='my-card'>
                <Card className="my-card">
                  <CardBody>
                    <CardTitle tag="h5">
                      500<span className="text-[#61D16A]">K</span>
                    </CardTitle>
                    <CardSubtitle className="mb-2 card-subtitle" tag="h6">
                      Monthly Active Users
                    </CardSubtitle>
                    <CardText className="card-text">
                      With high dedication, our designs are always perfectly to
                      the applied container which also pixel
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="3" className='my-card'>
                <Card className="my-card">
                  <CardBody>
                    <CardTitle tag="h5">
                      500<span className="text-[#61D16A]">K</span>
                    </CardTitle>
                    <CardSubtitle className="mb-2 card-subtitle" tag="h6">
                      Monthly Active Users
                    </CardSubtitle>
                    <CardText className="card-text">
                      With high dedication, our designs are always perfectly to
                      the applied container which also pixel
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="3" className='my-card'>
                <Card className="my-card">
                  <CardBody>
                    <CardTitle tag="h5">
                      500<span className="text-[#61D16A]">K</span>
                    </CardTitle>
                    <CardSubtitle className="mb-2 card-subtitle" tag="h6">
                      Monthly Active Users
                    </CardSubtitle>
                    <CardText className="card-text">
                      With high dedication, our designs are always perfectly to
                      the applied container which also pixel
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>
      {/* Presentation section */}
      <section className='bg-[#3D3D3D] pb-64 pb-md-30 pb-lg-40'>
      <Container fluid className='text-[#FFFFFF]'>
        <Row className='p-1 p-md-3 p-lg-5'>
          <Col xs={12} sm={12} md={6} lg={3}>
            <p className='font-bold text-[42px]'>Presentation</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={9}>
            <p className='font-normal text-lg'>We are creative design studios who make human experience with your business meaningful. We create brands with brands that affect the lives of millions of people and brands.</p>
          </Col>
          <Col className='d-none d-lg-block'>
            <Image src={FlashSVG} alt={'flash'}></Image>
          </Col>
        </Row>
      </Container>
      </section>
      {/* media player */}
      <section>
        <Container fluid>
          <Row className=''>
            <Col className='d-flex justify-center -mt-60'>
              <Image src={MediaIMG} alt={'img'}></Image>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
      {/* Latest Events */}
      <Container fluid>
        <Col className='px-1 px-md-3 px-lg-5'>
          <Row className='my-8'>
            <Col>
              <div className='font-bold text-[42px] text-center'>Latest Events</div>
            </Col>
          </Row>
          <Row className='p-1 p-md-3 p-lg-5'>
            <Col xs={12} sm={12} lg={10}>
              <Card className='border-0'>
                <CardBody>
                </CardBody>
                  <p className='font-normal text-lg text-[#12141D]'>June 21, 2023</p>
                  <p className='font-semibold text-2xl text-[#12141D] py-2'>J.P. Morgan Power & Renewables Conference, New York</p>
                  <p className='font-normal text-lg text-[#12141D]'>Graphic design is the art and profession of using compositions to<br/> solve problems & illustration focuses on creative interpretation.</p>
              </Card>
            </Col>
            <Col xs={12} sm={12} lg={2} className={'d-flex align-items-center'}>
              <Link href={''} className={'d-flex align-items-center gap-2 font-semibold text-base my-sm-2'}>View Details <span><BsArrowRight/></span></Link>
            </Col>
          </Row>
          <Row className='mx-1 mx-sm-1 mx-md-2 mx-lg-2'>
            <Col className='py-2'>
              <hr style={{height:"2px"}} className='bg-[#61D16A]'/>
            </Col>
          </Row>
          <Row className='p-1 p-md-3 p-lg-5'>
            <Col xs={12} sm={12} lg={10}>
              <Card className='border-0'>
                <CardBody>
                </CardBody>
                  <p className='font-normal text-lg text-[#12141D]'>June 21, 2023</p>
                  <p className='font-semibold text-2xl text-[#12141D] py-2'>J.P. Morgan Power & Renewables Conference, New York</p>
                  <p className='font-normal text-lg text-[#12141D]'>Graphic design is the art and profession of using compositions to<br/> solve problems & illustration focuses on creative interpretation.</p>
              </Card>
            </Col>
            <Col xs={12} sm={12} lg={2} className={'d-flex align-items-center'}>
              <Link href={''} className={'d-flex align-items-center gap-2 font-semibold text-base my-sm-2'}>View Details <span><BsArrowRight/></span></Link>
            </Col>
          </Row>
        </Col>
      </Container>
      </section>
      {/* News & Article */}
      <section className="browse-news px-2 px-md-4 px-lg-5">
        <Container fluid>
          <Row className="mb-3 mb-md-4 mb-lg-5">
            <Col xs="12" sm="12" md="8" lg="9" xl="9">
              <h2 className="section-title mb-4">
                Browse Our <span className="thickline">News &amp; Article</span>
              </h2>
              <p className="section-description mb-3">
                Usabiltiy flesh that out, we want to empower the team with the
                right tools and guidance to uplevel our craft.
              </p>
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" xl="3">
              <div className="discover-btn text-left text-md-right mb-3">
                <Button className="discover-solution">See All Articles</Button>
              </div>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col xs="12" sm="12" md="6" lg="4" xl="4">
              <Card>
                <Image src={NewsImg} alt="News &amp; Articles"></Image>
                <CardBody className="px-0">
                  <CardSubtitle className="mb-3 text-muted" tag="h6">
                    <div className="subtitle-wrapper">
                      <span className="category-name">Category #1 - </span>
                      <span className="date">Aug 21, 2020 - </span>
                      <span className="time">12 mins reading</span>
                    </div>
                  </CardSubtitle>
                  <CardTitle tag="h5" className="mb-4">
                    Guerrilla hit the thing ground running powerpoint
                  </CardTitle>
                  <Button className="readmore-link">
                    Read More <BsArrowRightShort size={24} />
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" xl="4">
              <Card>
                <Image src={NewsImg} alt="News &amp; Articles"></Image>
                <CardBody className="px-0">
                  <CardSubtitle className="mb-3 text-muted" tag="h6">
                    <div className="subtitle-wrapper">
                      <span className="category-name">Category #1 - </span>
                      <span className="date">Aug 21, 2020 - </span>
                      <span className="time">12 mins reading</span>
                    </div>
                  </CardSubtitle>
                  <CardTitle tag="h5" className="mb-4">
                    Guerrilla hit the thing ground running powerpoint
                  </CardTitle>
                  <Button className="readmore-link">
                    Read More <BsArrowRightShort size={24} />
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" xl="4">
              <Card>
                <Image src={NewsImg} alt="News &amp; Articles"></Image>
                <CardBody className="px-0">
                  <CardSubtitle className="mb-3 text-muted" tag="h6">
                    <div className="subtitle-wrapper">
                      <span className="category-name">Category #1 - </span>
                      <span className="date">Aug 21, 2020 - </span>
                      <span className="time">12 mins reading</span>
                    </div>
                  </CardSubtitle>
                  <CardTitle tag="h5" className="mb-4">
                    Guerrilla hit the thing ground running powerpoint
                  </CardTitle>
                  <Button className="readmore-link">
                    Read More <BsArrowRightShort size={24} />
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Investors Email Alerts */}
      <section className='latest-updates-form bg-[#3D3D3D] d-flex align-items-center'>
        <Container fluid>
        <Row className='mx-0 mx-md-2 mx-lg-5'>
        <Col sm={12} md={12} lg={12} xl={12}>
          <p className="font-bold text-4xl text-[#FFFFFF]">
            Investors Email Alerts
          </p>
          <p className="font-normal text-base text-[#FFFFFF] my-12">
            Keep track of investment news and updates with BOLT&apos;s email alerts.
          </p>
          <p className="font-normal text-base text-[#FFFFFF] my-2">
            Email Address
          </p>
        </Col>
        <Col sm={12} md={10} lg={10} xl={8}>
          <Row className="connect-form">
            <Col className="d-flex align-items-stretch" xs={12} xl={6} lg={6}>
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
      <section>
        <Footer />
      </section>
    </Fragment>
  );
}

export default Presentation