import Banner from 'components/banner/Banner'
import Footer from 'components/footer/footer'
import Form from 'components/form/Form'
import Header from 'components/header/Header'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import ChartSVG from "../../assets/svg/headers/Chart.svg";
import PaperzLogo from "../../assets/svg/paperz.svg";
import DorfuzLogo from "../../assets/svg/dorfus.svg";
import MartinoLogo from "../../assets/svg/martino.svg";
import SquareLogo from "../../assets/svg/square.svg";
import GobonaLogo from "../../assets/svg/gobona.svg";
import Profile from "../../assets/images/profile.png";
import Slider from 'react-slick'

const services = () => {
  var logosettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4500,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <Fragment>
      {/* header */}
      <section>
        <Header/>
      </section>
      <section className='banner blog-banner'>
        <Banner
        title={"Discover Our Software Services"}
        description={"By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team."}
        />
      </section>
      {/* card section */}
      <section>
      <Container fluid>
        <Col className='p-lg-5'>
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
                  100<span className='text-[#61D16A]'>K</span>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 card-subtitle"
                  tag="h6"
                >
                  Installations
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
                  500<span className='text-[#61D16A]'>K</span>
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
                  500<span className='text-[#61D16A]'>K</span>
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
                  500<span className='text-[#61D16A]'>K</span>
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
          </Row>
        </Col>
      </Container>
      </section>
      {/* Feature Section */}
      <section className='feature shade'>
        {/* Simple Scan-Pay-Charge Process */}
        <div className='mx-auto container'>
          <div className="row">
            <div className='col-md-6 col-sm-12 col-lg-6'>
            <div className='col-md-6 col-sm-12 col-lg-6 d-block d-sm-none'>
              <Image
                src={ChartSVG}
                alt={"Chart"}
                width={300}
                height={200}
                layout='responsive'
              />
            </div>
              <div className='content-header'><span className="rounded-divider">Feature</span></div>
              <div className='content-blog-detail'>
                <p>Don’t get into an installation hassle with your home charging device. Simply get a BOLT charging point and an electrician!</p>
                <p>Your charging point will be up and running in no time. Add this charger to the app and start generating passive income.</p>
                <p>Get cost-effective and convenient charging while you focus on life’s more pressing issues.
                </p>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6 d-none d-sm-block'>
              <Image
                src={ChartSVG}
                alt={"Chart"}
                width={300}
                height={200}
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='feature'>
      {/*Faster and Safer Charging */}
        <div className='mx-auto container'>
          <div className="row">
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <Image
                src={ChartSVG}
                alt={"Chart"}
                width={300}
                height={200}
                layout='responsive'
              />
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <div className='content-header'><span className="rounded-divider">Feature</span></div>
              <div className='content-blog-detail'>
                <p>Don’t worry about increasing your electricity consumption with home charging.</p>
                <p>The Indian government gives subsidies to electricity suppliers for home EV charging. Get a BOLT charging point and take advantage of cheaper electricity. </p>
                <p>Help India reach its targets for EV adoption! </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='feature shade'>
        {/* Connected and Smart */}
        <div className='mx-auto container'>
          <div className="row">
            <div className='col-md-6 col-sm-12 col-lg-6'>
            <div className='col-md-6 col-sm-12 col-lg-6 d-block d-sm-none'>
              <Image
                src={ChartSVG}
                alt={"Chart"}
                width={300}
                height={200}
                layout='responsive'
              />
            </div>
              <div className='content-header'><span className="rounded-divider">Feature</span></div>
              <div className='content-blog-detail'>
                <p>Don&apos;t feel like checking up on how your charge is going every 5 minutes? Track charging through the BOLT OS app! </p>
                <p>You&apos;ll see what&apos;s happening with your car from your phone without having to go to the charging point. The BOLT app will let you know when your car has finished charging. </p>
                <p>Enjoy a more convenient, connected charging experience!   </p>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6 d-none d-sm-block'>
              <Image
                src={ChartSVG}
                alt={"Chart"}
                width={300}
                height={200}
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </section>
      {/* what our customers have to say */}
      <section className='bg-[#3D3D3D]'>
        <Container>
          <Col>
          <Row className='justify-center p-5'>
            <div className='text-[#FFFFFF] font-bold text-[42px]'>What Our Customers Are Saying</div>
          </Row>
          <Row className='bg-[white]'>
            <Col lg="4">
              <Card className='border-0'>
                <CardBody>
                  <div className='mb-2'>
                    <Image src={Profile} alt={'profile'}></Image>
                  </div>
                  <div className='bg-[white]'>
                    <p className='font-normal text-xl mb-3'>
                    “The easiest and most accurate way to track time across teams and finish the projects. Timely&apos;s automatic.”
                    </p>
                  </div>
                  <div>
                    <p className='font-bold text-lg text-[#12141D] mb-3'>Jerome Bell</p>
                    <p className='font-normal text-base text-[#52525B] mb-3'>CTO, Waverio</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className='border-0'>
                <CardBody>
                  <div className='mb-2'>
                    <Image src={Profile} alt={'profile'}></Image>
                  </div>
                  <div className='bg-[white]'>
                    <p className='font-normal text-xl mb-3'>
                    “The easiest and most accurate way to track time across teams and finish the projects. Timely&apos;s automatic.”
                    </p>
                  </div>
                  <div>
                    <p className='font-bold text-lg text-[#12141D] mb-3'>Jerome Bell</p>
                    <p className='font-normal text-base text-[#52525B] mb-3'>CTO, Waverio</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className='border-0'>
                <CardBody>
                  <div className='mb-2'>
                    <Image src={Profile} alt={'profile'}></Image>
                  </div>
                  <div className='bg-[white]'>
                    <p className='font-normal text-xl mb-3'>
                    “The easiest and most accurate way to track time across teams and finish the projects. Timely&apos;s automatic.”
                    </p>
                  </div>
                  <div>
                    <p className='font-bold text-lg text-[#12141D] mb-3'>Jerome Bell</p>
                    <p className='font-normal text-base text-[#52525B] mb-3'>CTO, Waverio</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className='justify-center'>
            <Container fluid>
            <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="12">
              <div className='p-2 p-md-3 p-lg-5'>
                <h2 className='text-center text-white font-semibold text-xl mb-4'>Trusted by world class business owners</h2>
                <Slider className='logo-carousel' {...logosettings}>
                  <div className='logo-wrapper text-center'><Image src={PaperzLogo} alt={'paperz logo'}></Image></div>
                  <div className='logo-wrapper text-center'><Image src={DorfuzLogo} alt={'dorfuz logo'}></Image></div>
                  <div className='logo-wrapper text-center'><Image src={MartinoLogo} alt={'martino logo'}></Image></div>
                  <div className='logo-wrapper text-center'><Image src={SquareLogo} alt={'square logo'}></Image></div>
                  <div className='logo-wrapper text-center'><Image src={GobonaLogo} alt={'gobona logo'}></Image></div>
                </Slider>
              </div>
            </Col>
            </Row>
        </Container>
            
          </Row>
          </Col>
        </Container>
      </section>
      <section className='bg-[#0F0F0F] advisor-form pt-3 pt-md-5'>
        <Form/>
      </section>
      <section>
        <Footer/>
      </section>
    </Fragment>
  )
}

export default services