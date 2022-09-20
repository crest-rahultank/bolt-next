import React, { useState } from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import Carousel from 'components/carousel/carousel';
import Slider from "react-slick";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import FilaLogo from "../../assets/svg/companies/fila.svg";
import RitterLogo from "../../assets/svg/companies/ritter.svg";
import NikeLogo from "../../assets/svg/companies/nike.svg";
import AdidasLogo from "../../assets/svg/companies/adidas.svg";
import HollandLogo from "../../assets/svg/companies/new-holland.svg";
import PumaLogo from "../../assets/svg/companies/puma.svg";
import NewsImg from "../../assets/images/news-1.png";
import TestimonialImg from "../../assets/images/testimonial.png";
import TestimonialLogo from "../../assets/images/tt-logo.svg";
import SolutionImg from "../../assets/images/solution.png";
import Image from 'next/image';
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import DownloadAppComp from "components/downloadApp/DownloadAppComp";
import Link from 'next/link';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 12H20.25" stroke="#0F0F0F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0F0F0F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.25 12H3.75" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

const Landing = (props) => {
  var logosettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      // autoplay: true,
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
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
  var testimoninalsettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1500,
    autoplaySpeed: 4500,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
    };
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
    <Header />
    <Carousel />
    <section className='logo-slider-holder px-2 px-md-4 px-lg-5'>
        <Container fluid>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <div className='trusted-companies bg-white py-4 py-md-3 py-lg-5'>
                        <h2 className='companies-title text-center'>Trusted by more than 200+ companies and government agencies worldwide</h2>
                        <Slider className='logo-carousel' {...logosettings}>
                            <div className='logo-wrapper text-center'><Image src={FilaLogo} alt={'fila logo'}></Image></div>
                            <div className='logo-wrapper text-center'><Image src={RitterLogo} alt={'Ritter logo'}></Image></div>
                            <div className='logo-wrapper text-center'><Image src={NikeLogo} alt={'nike logo'}></Image></div>
                            <div className='logo-wrapper text-center'><Image src={AdidasLogo} alt={'adidas logo'}></Image></div>
                            <div className='logo-wrapper text-center'><Image src={HollandLogo} alt={'holland logo'}></Image></div>
                            <div className='logo-wrapper text-center'><Image src={PumaLogo} alt={'puma logo'}></Image></div>
                        </Slider>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='impact-number-holder py-5 py-md-4 py-lg-5 px-2 px-md-4 px-lg-5'>
      <Container fluid>
        <Row className='align-items-center'>
          <Col xs="12" sm="12" md="12" lg="6" xl="6">
            <div className='left-section mb-5 mb-md-3 mb-lg-2 pr-0 pr-md-4 pr-lg-5'>
              <h2 className='section-title mb-4'>See <span className='thickline'>Our Impacts</span> In Number</h2>
              <p className='section-description'>Guerrilla marketing will hit the ground running with powerpoint bunny for or optimize them</p>
            </div>
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" xl="6">
            <Row>
              <Col xs="12" sm="12" md="12" lg="6" xl="6">
                <div className='customer-block mb-4'>
                  <h3>128<span>K</span></h3>
                  <p className='subtitle mb-4'>Costumers</p>
                  <p className='description'>With high dedication, our designs are always perfectly to the applied container which also pixel</p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6" xl="6">
                <div className='customer-block mb-4'>
                  <h3>128<span>K</span></h3>
                  <p className='subtitle mb-4'>Costumers</p>
                  <p className='description'>With high dedication, our designs are always perfectly to the applied container which also pixel</p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6" xl="6">
                <div className='customer-block mb-4'>
                  <h3>128<span>K</span></h3>
                  <p className='subtitle mb-4'>Costumers</p>
                  <p className='description'>With high dedication, our designs are always perfectly to the applied container which also pixel</p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6" xl="6">
                <div className='customer-block mb-4'>
                  <h3>128<span>K</span></h3>
                  <p className='subtitle mb-4'>Costumers</p>
                  <p className='description'>With high dedication, our designs are always perfectly to the applied container which also pixel</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='bolt-solution-holder py-5 py-md-4 py-lg-5 px-2 px-md-4 px-lg-5'>
      <Container fluid>
        <Row className='mb-4 mb-md-5'>
          <Col xs="12" sm="12" md="6" lg="8" xl="8">
            <h2 className='section-title mb-4'>Bolt <span className='thickline'>Solution</span></h2>
            <p className='section-description'>Guerrilla marketing will hit the ground running with powerpoint bunny for or optimize them</p>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
            <div className='discover-btn text-left text-md-right'>
              <Button className='discover-solution'>Discover All Solutions</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6" xl="6">
            <div className='solution-wrapper'>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">For Retail <span><FiArrowRight /></span></AccordionHeader>
                  <AccordionBody accordionId="1">
                    <div className='solution-card'>
                      <div className='solution-title-wrapper mb-3 mb-md-4 d-flex justify-content-between align-items-center'>
                        <h2>For Business</h2>
                        <Link href={''} passHref={true}><FiArrowUpRight size={30} /></Link>
                      </div>
                      <p className='solution-description mb-4 mb-md-5'>Usabiltiy flesh that out, we want to empower the team with the right tools and guidance to uplevel our build better can you ballpark the cost per unit for me golden goose </p>
                      <div className='connect-advisor-link position-relative pl-5'>
                        <Link href={''}>Connect With Advisor</Link>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">For Dealers &amp; EV Automakers <span><FiArrowRight /></span></AccordionHeader>
                  <AccordionBody accordionId="2">
                    <div className='solution-card'>
                      <div className='solution-title-wrapper mb-3 mb-md-4 d-flex justify-content-between align-items-center'>
                        <h2>For Business</h2>
                        <Link href={''} passHref={true}><FiArrowUpRight size={30} /></Link>
                      </div>
                      <p className='solution-description mb-4 mb-md-5'>Usabiltiy flesh that out, we want to empower the team with the right tools and guidance to uplevel our build better can you ballpark the cost per unit for me golden goose </p>
                      <div className='connect-advisor-link position-relative pl-5'>
                        <Link href={''}>Connect With Advisor</Link>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">Discover All Solutions <span><FiArrowRight /></span></AccordionHeader>
                  <AccordionBody accordionId="3">
                    <div className='solution-card'>
                      <div className='solution-title-wrapper mb-3 mb-md-4 d-flex justify-content-between align-items-center'>
                        <h2>For Business</h2>
                        <Link href={''} passHref={true}><FiArrowUpRight size={30} /></Link>
                      </div>
                      <p className='solution-description mb-4 mb-md-5'>Usabiltiy flesh that out, we want to empower the team with the right tools and guidance to uplevel our build better can you ballpark the cost per unit for me golden goose </p>
                      <div className='connect-advisor-link position-relative pl-5'>
                        <Link href={''}>Connect With Advisor</Link>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" xl="6" className='text-left text-md-right'>
            <div className='solution-image'>
              <Image src={SolutionImg} alt="Solutions" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='browse-news-holder py-5 py-md-4 py-lg-5 px-2 px-md-4 px-lg-5'>
      <Container fluid>
        <Row className='mb-3 mb-md-4 mb-lg-5'>
          <Col xs="12" sm="12" md="8" lg="9" xl="9">
            <h2 className='section-title mb-4'>Browse Our <span className='thickline'>News &amp; Article</span></h2>
            <p className='section-description mb-3'>Usabiltiy flesh that out, we want to empower the team with the right tools and guidance to uplevel our craft.</p>
          </Col>
          <Col xs="12" sm="12" md="4" lg="3" xl="3">
            <div className='discover-btn text-left text-md-right mb-3'>
              <Button className='discover-solution'>See All Articles</Button>
            </div>
          </Col>
        </Row>
        <Row className='justify-center'>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
            <Card>
              <Image src={NewsImg} alt="News &amp; Articles"></Image>
              <CardBody className='px-0'>
                <CardSubtitle className="mb-3 text-muted" tag="h6">
                  <div className='subtitle-wrapper'>
                    <span className='category-name'>Category #1 - </span>
                    <span className='date'>Aug 21, 2020 - </span>
                    <span className='time'>12 mins reading</span>
                  </div>
                </CardSubtitle>
                <CardTitle tag="h5" className='mb-4'>Guerrilla hit the thing ground running powerpoint</CardTitle>
                <Button className="readmore-link">
                  Read More <BsArrowRightShort size={24} />
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
            <Card>
              <Image src={NewsImg} alt="News &amp; Articles"></Image>
              <CardBody className='px-0'>
                <CardSubtitle className="mb-3 text-muted" tag="h6">
                  <div className='subtitle-wrapper'>
                    <span className='category-name'>Category #1 - </span>
                    <span className='date'>Aug 21, 2020 - </span>
                    <span className='time'>12 mins reading</span>
                  </div>
                </CardSubtitle>
                <CardTitle tag="h5" className='mb-4'>Guerrilla hit the thing ground running powerpoint</CardTitle>
                <Button className="readmore-link">
                  Read More <BsArrowRightShort size={24} />
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
            <Card>
              <Image src={NewsImg} alt="News &amp; Articles"></Image>
              <CardBody className='px-0'>
                <CardSubtitle className="mb-3 text-muted" tag="h6">
                  <div className='subtitle-wrapper'>
                    <span className='category-name'>Category #1 - </span>
                    <span className='date'>Aug 21, 2020 - </span>
                    <span className='time'>12 mins reading</span>
                  </div>
                </CardSubtitle>
                <CardTitle tag="h5" className='mb-4'>Guerrilla hit the thing ground running powerpoint</CardTitle>
                <Button className="readmore-link">
                  Read More <BsArrowRightShort size={24} />
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='beloved-costumers-holder d-block d-lg-none py-5 py-md-4 py-lg-5 px-2 px-md-4 px-lg-5'>
      <Container fluid>
        <div className='costumer-testimonial'>
          <Row className='mb-3 mb-md-4 mb-lg-5'>
            <Col xs="12" sm="12" md="8" lg="6" xl="6">
              <h2 className='section-title text-white mb-3'>What Our Beloved Costumers Say</h2>
            </Col>
            <Col xs="12" sm="12" md="4" lg="6" xl="6">
              <div className='discover-btn text-left text-md-right mb-3'>
                <Button className='discover-solution'>View All Testimonials</Button>
              </div>
            </Col>
          </Row>
          <Row className='mb-3 mb-md-4 mb-lg-5'>
              <Col xs="12">
                <Slider className='mb-5 testimonial-carousel' {...testimoninalsettings}>
                    <div className='testimonial-wrapper text-center text-white'>
                      <Row className='align-items-center'>
                        <Col xs="12" sm="12" md="6" lg="5" xl="5" className='text-start'>
                          <Image src={TestimonialImg} alt="Testimonial Image" className='tt-image' />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="7" xl="7">
                            <div className='testimonial-content text-start'>
                              <Image src={TestimonialLogo} alt="Client Logo" />
                              <h3 className='testimonial-title mb-3 mt-5'>“Professional and hig-level services”</h3>
                              <p className='testimonial-description mb-3 pb-3 mb-md-4 pb-md-4 mb-lg-5 pb-lg-5'>Don&apos;t over think it big data or let&apos;s circle back to that nor hit the ground running can you slack it to me. Pull in ten extra bodies to help roll the tortoise deploy to production wheelhouse, or let&apos;s put a pin in that. Killing it innovation is hot right now.</p>
                              <h4 className='costumer-name mb-1'>John Cenna</h4>
                              <p className='costumer-designation'>VP of finance at Changi Airport Group</p>
                            </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='testimonial-wrapper text-center text-white'>
                      <Row className='align-items-center'>
                        <Col xs="12" sm="12" md="6" lg="5" xl="5" className='text-start'>
                          <Image src={TestimonialImg} alt="Testimonial Image" className='tt-image' />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="7" xl="7">
                            <div className='testimonial-content text-start'>
                              <Image src={TestimonialLogo} alt="Client Logo" />
                              <h3 className='testimonial-title mb-3 mt-5'>“Professional and hig-level services”</h3>
                              <p className='testimonial-description mb-3 pb-3 mb-md-4 pb-md-4 mb-lg-5 pb-lg-5'>Don&apos;t over think it big data or let&apos;s circle back to that nor hit the ground running can you slack it to me. Pull in ten extra bodies to help roll the tortoise deploy to production wheelhouse, or let&apos;s put a pin in that. Killing it innovation is hot right now.</p>
                              <h4 className='costumer-name mb-1'>John Cenna</h4>
                              <p className='costumer-designation'>VP of finance at Changi Airport Group</p>
                            </div>
                        </Col>
                      </Row>
                    </div>
                </Slider>
              </Col>
          </Row>
          <Row className='my-3 my-sm-5 mb-my-4 my-lg-5 d-none d-md-flex align-items-center'>
            <Col xs="12" sm="12" md="8" lg="8" xl="8">
              <h2 className='section-title text-white'>We Realize Your EV Dreams</h2>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" xl="4">
              <div className='connect-advisor position-relative text-left text-md-right'>
                <Link href={''}>Connect With Advisor</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    <section className='get-started-holder py-5 py-md-4 py-lg-5 px-2 px-md-4 px-lg-5'>
      <Container fluid>
        <div className='beloved-costumers-holder d-none d-lg-block'>
          <div className='costumer-testimonial'>
            <Row className='mb-3 mb-md-4 mb-lg-5'>
              <Col xs="12" sm="12" md="8" lg="6" xl="6">
                <h2 className='section-title text-white mb-3'>What Our Beloved Costumers Say</h2>
              </Col>
              <Col xs="12" sm="12" md="4" lg="6" xl="6">
                <div className='discover-btn text-left text-md-right mb-3'>
                  <Button className='discover-solution'>View All Testimonials</Button>
                </div>
              </Col>
            </Row>
            <Row className='mb-3 mb-md-4 mb-lg-5'>
                <Col xs="12">
                  <Slider className='mb-5 testimonial-carousel' {...testimoninalsettings}>
                      <div className='testimonial-wrapper text-center text-white'>
                        <Row className='align-items-center'>
                          <Col xs="12" sm="12" md="6" lg="5" xl="5" className='text-start'>
                            <Image src={TestimonialImg} alt="Testimonial Image" className='tt-image' />
                          </Col>
                          <Col xs="12" sm="12" md="6" lg="7" xl="7">
                              <div className='testimonial-content text-start'>
                                <Image src={TestimonialLogo} alt="Client Logo" />
                                <h3 className='testimonial-title mb-3 mt-5'>“Professional and hig-level services”</h3>
                                <p className='testimonial-description mb-3 pb-3 mb-md-4 pb-md-4 mb-lg-5 pb-lg-5'>Don&apos;t over think it big data or let&apos;s circle back to that nor hit the ground running can you slack it to me. Pull in ten extra bodies to help roll the tortoise deploy to production wheelhouse, or let&apos;s put a pin in that. Killing it innovation is hot right now.</p>
                                <h4 className='costumer-name mb-1'>John Cenna</h4>
                                <p className='costumer-designation'>VP of finance at Changi Airport Group</p>
                              </div>
                          </Col>
                        </Row>
                      </div>
                      <div className='testimonial-wrapper text-center text-white'>
                        <Row className='align-items-center'>
                          <Col xs="12" sm="12" md="6" lg="5" xl="5" className='text-start'>
                            <Image src={TestimonialImg} alt="Testimonial Image" className='tt-image' />
                          </Col>
                          <Col xs="12" sm="12" md="6" lg="7" xl="7">
                              <div className='testimonial-content text-start'>
                                <Image src={TestimonialLogo} alt="Client Logo" />
                                <h3 className='testimonial-title mb-3 mt-5'>“Professional and hig-level services”</h3>
                                <p className='testimonial-description mb-3 pb-3 mb-md-4 pb-md-4 mb-lg-5 pb-lg-5'>Don&apos;t over think it big data or let&apos;s circle back to that nor hit the ground running can you slack it to me. Pull in ten extra bodies to help roll the tortoise deploy to production wheelhouse, or let&apos;s put a pin in that. Killing it innovation is hot right now.</p>
                                <h4 className='costumer-name mb-1'>John Cenna</h4>
                                <p className='costumer-designation'>VP of finance at Changi Airport Group</p>
                              </div>
                          </Col>
                        </Row>
                      </div>
                  </Slider>
                </Col>
            </Row>
            <Row className='my-3 my-sm-5 mb-my-4 my-lg-5 d-none d-md-flex align-items-center'>
              <Col xs="12" sm="12" md="8" lg="8" xl="8">
                <h2 className='section-title text-white'>We Realize Your EV Dreams</h2>
              </Col>
              <Col xs="12" sm="12" md="4" lg="4" xl="4">
                <div className='connect-advisor-link position-relative text-left text-md-right'>
                  <Link href={''}>Connect With Advisor</Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Row className='justify-center'>
          <Col xs="12" sm="12" md="10" lg="10" xl="10">
            <h2 className='text-center mb-5'>Get Started With Our Products</h2>
            <p className='text-center mb-5'>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.</p>
            <div className='connect-advisor text-center'>
              <Button className='connect-btn'>Connect With Advisor</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='download-app-holder pt-5 pt-md-4 pt-lg-5 px-2 px-md-4 px-lg-5'>
      <DownloadAppComp />
    </section>
    <Footer />
    </>
  )
}

export default Landing;

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch('http://localhost:1337/api/landing-page?populate=deep');
  const data = await res.json();
  return {
    props:  data.data,
  }
}