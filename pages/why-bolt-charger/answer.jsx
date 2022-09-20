import React,{ Fragment } from 'react'
import Image from 'next/image'

import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import HelpSVG from "../../assets/svg/helpcentre/helpcentre.svg";
import ChartSVG from "../../assets/svg/headers/Chart.svg";
import ChargerSVG from "../../assets/svg/charger/charger.svg";
import SpiralSVG from "../../assets/svg/spirallines/spirallines.svg";
import { BsArrowRight, BsCart, BsFillCheckCircleFill } from 'react-icons/bs'
import Form from 'components/form/Form'

const points = [
  "Power your EV efficiently and cost-effectively. The BOLT charging points utilize the full 230V 15A power source your home gives you.",
  "Generate passive income by allowing other EV drivers to charge their vehicles with your charging point. "
]

const app = [
  "Scan the QR code on the side of a BOLT charging point and let the BOLT OS app do the rest.",
  "Get real-time information from the app; no need to go and check on how much charge you have or check on charging status."
]

const experience = [
  "Select from 15,000+ charging points on the BOLT Charging Network using the BOLT app, even in rural locations",
  "Use BOLT with Wi-Fi compatible devices to get navigation directions while on the go."
]

const Answer = () => {
  return (
    <Fragment>
    <Header/>
    {/* Banner with Heading & Home Icon */}
    <section className="banner">
        <Container fluid>
          <Row>
            <Col sm="8" md="8" lg="8" className="banner-content-sm">
            <span className='header-title'>Why BOLT Charger?</span>
            <p className="banner-content-description">Charge your EV at home with the highly efficient yet low-cost BOLT charging station!</p>
            </Col>
            <Col sm="4" md="4" lg="4" className="d-none d-sm-block ">
              <Image
                src={HelpSVG}
                alt={"Help Logo"}
                width={300}
                height={200}
                layout='responsive'
              />
            </Col>
          </Row>
        </Container>
    </section>
    {/* card section */}
    <section>
      <Container fluid>
        <Row>
          <Col className='text-center mb-4'>
            <div className='content-header'>See <span className='rounded-divider'>Our Impacts</span> in Number</div>
            <div className='text-[#808080] text-lg font-normal'>Guerrilla marketing will hit the ground running with powerpoint bunny for or optimize them.</div>
          </Col>
        </Row>
        <Row className=''>
          <Col sm="12" md="6" lg="3" className=''>
          <Card className="my-card">
            <CardBody>
              <CardTitle className='card-title'>
                100<span className='text-[#61D16A]'>+</span>
              </CardTitle>
              <CardSubtitle
                className="mb-2 card-subtitle"
                tag="h6"
              >
                Cities
              </CardSubtitle>
              <CardText className='card-text'>
                With high dedication, our designs are always perfectly to the applied container which also pixel
              </CardText>
            </CardBody>
          </Card>
          </Col>
          <Col sm="12" md="6" lg="3">
          <Card className="my-card">
            <CardBody>
              <CardTitle tag="h5">
                60<span className='text-[#61D16A]'>K</span>
              </CardTitle>
              <CardSubtitle
                className="mb-2 card-subtitle"
                tag="h6"
              >
                Monthly Active Users
              </CardSubtitle>
              <CardText className='card-text'>
                With high dedication, our designs are always perfectly to the applied container which also pixel
              </CardText>
            </CardBody>
          </Card>
          </Col>
          <Col sm="12" md="6" lg="3">
          <Card className="my-card">
            <CardBody>
              <CardTitle tag="h5">
                10<span className='text-[#61D16A]'>K</span>
              </CardTitle>
              <CardSubtitle
                className="mb-2 card-subtitle"
                tag="h6"
              >
                Charging Points
              </CardSubtitle>
              <CardText className='card-text'>
                With high dedication, our designs are always perfectly to the applied container which also pixel
              </CardText>
            </CardBody>
          </Card>
          </Col>
          <Col sm="12" md="6" lg="3">
          <Card className="my-card">
            <CardBody>
              <CardTitle tag="h5">
                65<span className='text-[#61D16A]'>MW</span>
              </CardTitle>
              <CardSubtitle
                className="mb-2 card-subtitle"
                tag="h6"
              >
                Installed Capacity
              </CardSubtitle>
              <CardText className='card-text'>
                With high dedication, our designs are always perfectly to the applied container which also pixel
              </CardText>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Detailed Sections */}
    <section className='versatile-charging-point'>
      {/* Versatile Charging Points */}
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
            <div className="content-sub-header">REASON #1</div>
            <div className='content-header'>Versatile Charging Points</div>
            <div className='content-blog-detail'>
              <p>Use your BOLT charging point overnight to power your daily driver efficiently. Generate passive income while you’re away.</p>
              <ul>
              {points.map((list) => {
                return <li key='id' className='font-bold text-lg text-[#3D3D3D] d-flex gap-4 align-items-center mb-4'><span><BsFillCheckCircleFill color='#61D16A'/></span>{list}</li>
              } )}
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Discover Charging Points <span><BsArrowRight/></span> </Button>
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='smart-bolt-app'>
    {/* Smart BOLT App */}
      <Container className='mx-auto shade'>
        <Row>
        <Col md="6" sm="12" lg="6">
            <div className="content-sub-header">REASON #2</div>
            <div className='content-header'>Smart BOLT App</div>
            <div className='content-blog-detail'>
              <p>Use the BOLT mobile app to book, navigate, and pay for your EV charging, all from one centralized location.</p>
              {app.map((list) => {
                return <li key='id' className='font-bold text-lg text-[#3D3D3D] d-flex gap-4 align-items-center mb-4'><span><BsFillCheckCircleFill color='#61D16A'/></span>{list}</li>
              } )}
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Download BOLT App <span><BsArrowRight/></span> </Button>
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
    <section className='enjoyable-experience'>
      {/* Enjoyable Experience */}
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
            <div className="content-sub-header">REASON #3</div>
            <div className='content-header'>Enjoyable Experience</div>
            <div className='content-blog-detail'>
              <p>Get metrics and features to help you enjoy your travels with the BOLT app. Know exactly when you need to charge next and how much it’ll cost you. </p>
              {experience.map((list) => {
                return <li key='id' className='font-bold text-lg text-[#3D3D3D] d-flex gap-4 align-items-center mb-4'><span><BsFillCheckCircleFill color='#61D16A'/></span>{list}</li>
              } )}
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Connect With Advisor <span><BsArrowRight/></span> </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Case Studies */}
    <section className='bg-[#3D3D3D]'>
      <Container className='mx-auto'>
        <Row>
          <Col className='text-center'>
            <div className='content-header text-white mb-2'>Case Studies</div>
            <div className='text-lg font-normal text-white mb-4'>Usabiltiy flesh that out, we want to empower the team with the right tools and guidance to uplevel our craft and build better.</div>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card className="my-2 bg-black mb-3">
            <CardBody>
              <Row>
                <Col>
                  <p className="text-[#808080] font-bold text-3xl mb-2">
                    How We Work Increased Blog Traffic by 127% with BOLT
                  </p>
                  <p className="text-[#808080] font-bold text-lg">
                    Alex Johnson • Architect Designer for Cluster Residence
                  </p>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="my-2 bg-black mb-3">
            <CardBody>
              <p className="text-[#808080] font-bold text-3xl mb-2">
                How We Work Increased Blog Traffic by 127% with BOLT
              </p>
              <p className="text-[#808080] font-bold text-lg">
                Alex Johnson • Architect Designer for Cluster Residence
              </p>
            </CardBody>
          </Card>
          <Card className="my-2 bg-black mb-3">
            <CardBody>
              <p className="text-[#808080] font-bold text-3xl mb-2">
                How We Work Increased Blog Traffic by 127% with BOLT
              </p>
              <p className="text-[#808080] font-bold text-lg">
                Alex Johnson • Architect Designer for Cluster Residence
              </p>
            </CardBody>
          </Card>
          <Card className="my-2 bg-black mb-3">
            <CardBody>
              <p className="text-[#808080] font-bold text-3xl mb-2">
                How We Work Increased Blog Traffic by 127% with BOLT
              </p>
              <p className="text-[#808080] font-bold text-lg">
                Alex Johnson • Architect Designer for Cluster Residence
              </p>
            </CardBody>
          </Card>
          <Card className="my-2 bg-black">
            <CardBody>
              <p className="text-[#808080] font-bold text-3xl mb-2">
                How We Work Increased Blog Traffic by 127% with BOLT
              </p>
              <p className="text-[#808080] font-bold text-lg">
                Alex Johnson • Architect Designer for Cluster Residence
              </p>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Connect with Advisor Form */}
    <section className='bg-[#0F0F0F] advisor-form pt-3 pt-md-5'>
      <Form/>
    </section>
    {/* Footer */}
    <section>
      <Footer/>
    </section>
  </Fragment>
  )
}

export default Answer