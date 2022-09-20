import { Fragment } from 'react';

import SolutionsSVG from "../../assets/svg/all-solutions/solutions.svg";
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import Image from 'next/image';
import Form from 'components/form/Form';
import { Button, Col, Container, Row } from 'reactstrap';
import { BsArrowRight } from 'react-icons/bs';

const listOem = [
  "Reduce the barrier to sale for customers",
  "Gain customers from competitors who don’t offer a daily charging solution",
  "Increase your market share by improving consumer quality of care",
  "Offer a popular bundle deal to add value to sales",
  "Align your products with an established 15,000+ charging network",
]

const listApartment = [
  "Attract and retain high value, green-minded residents.",
  "Increase average rent and property value.",
  "Meet emerging state and city regulations.",
  "Save money - Installing charging infra at your Apartment Complex - possible property tax exemption depending on regulations in localities eg PUNE",
  "Support when you need it - Our support team is standing by to help 24/7.",
]

const Solutions = () => {
  return (
    <Fragment>
      <Header />
      {/* Banner with Heading & Home Icon */}
      <section className="banner solutions-banner bg-[#0F0F0F] text-[#ffff]">
        <Container fluid>
          <Row className='justify-center'>
            <Col sm="12" md="10" lg="12" className=''>
              <p className='solutions-title text text-center'>BOLT Solutions</p><br/>
              <p className="text text-center text-xl font-normal text-[#FFFFFF]">Discover all the exciting products and features BOLT has to offer and how they can add value to your life.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Feature Section */}
      <section className=''>
        {/* BOLT Solutions For Businesses */}
        <Container className="mx-auto">
          <Col sm="12" md="10" lg="12" className='p-4'>
            <div className='section-title mb-4'>BOLT Solutions <span className='rounded-divider'>For Businesses</span></div>
            <div className='section-para'>
              <p className='mb-4'>BOLT has built the largest electric vehicle (EV) charging network, with solutions for every type of business in the ecosystem. Our team of EV experts have the tech know-how to make EVs smarter while also offering the most seamless charging experience, covering EV charging inside and out.</p>  
              <p className='mb-4'>
              BOLT is the right solution for your business to keep your EV customers, employees, visitors, residents and partners happy.
              </p>
            </div>
          </Col>
          <Row>
            <Col sm="12" md="" lg="6" className='d-flex flex-col justify-between'>
              <div className='mt-4 d-none d-md-block'>
                <ul>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-bg'/></div>
                  <div className='ml-4'>
                  <li className='text-[#61D16A] font-semibold text-2xl'>EV Makers</li>
                  </div>
                  </Row>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-xl'>Auto Dealers</li>
                  </div>
                  </Row>
                  <Row className='align-items-center'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-xl'>Fleet Operators</li>
                  </div>
                  </Row>

                </ul>
              </div>
              <div className='d-none d-md-block'>
                <Image src={SolutionsSVG} alt={'solutions'}></Image>
              </div>
            </Col>
            <Col sm="12" md="" lg="6" className='bg-[#3D3D3D] p-4 mx-auto'>
              <p className='text-[#FFFFFF] font-bold text-3xl mb-4'>EV Makers & OEMs</p>
              <p className='text-[#FFFFFF] font-normal text-lg mb-4'>BOLT targets 2- and 3-wheel charging scenarios for emerging markets and maximizes adoption with its low entry point per unit. Combine BOLT with your EV offerings for added value on all your sales. </p>
              <div className='mb-4'>
                {listOem.map((list) => {
                  return(
                    <ul key="id">
                      <li className='text-[#FFFFFF] font-normal text-lg mb-1'><span className='d-flex align-items-center gap-2'><BsArrowRight className='text-[#61D16A]'/>{list}</span></li>
                    </ul>
                  )
                })}
              </div>
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Discover All Solutions <span><BsArrowRight/></span> </Button>

            </Col>
          </Row>
        </Container>
      </section>

      <section className=''>
      {/*BOLT Solutions For Real Estate*/}
        <Container className="mx-auto">
          <Col sm="12" md="10" lg="12" className='p-4'>
            <div className='section-title mb-4'>BOLT Solutions <span className='rounded-divider'>For Real Estate</span></div>
            <div className='section-para'>
              <p className='mb-4'>BOLT has built the largest electric vehicle (EV) charging network, with solutions for every type of business in the ecosystem. Our team of EV experts have the tech know-how to make EVs smarter while also offering the most seamless charging experience, covering EV charging inside and out.</p>  
            </div>
          </Col>
          <Row>
            <Col sm="12" md="" lg="6" className='bg-[#3D3D3D] p-4 mx-auto'>
              <p className='text-[#FFFFFF] font-bold text-3xl mb-4'>Apartment Complex RWAs</p>
              <p className='text-[#FFFFFF] font-normal text-lg mb-4'>Attract Residents and Increase Your Property Value by Providing a Premium EV Charging Experience.Partner with us for a smooth transition to pollution-free living with EV charging solutions within your complexes.</p>
              <div className='mb-4'>
                {listApartment.map((list) => {
                  return(
                    <ul key="id">
                      <li className='text-[#FFFFFF] font-normal text-lg mb-1'><span className='d-flex align-items-center gap-2'><BsArrowRight className='text-[#61D16A]'/>{list}</span></li>
                    </ul>
                  )
                })}
              </div>
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Discover All Solutions <span><BsArrowRight/></span> </Button>
            </Col>
            <Col sm="12" md="" lg="6" className='d-flex flex-col justify-between'>
              <div className='p-4 d-none d-md-block'>
                <ul>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-bg'/></div>
                  <div className='ml-4'>
                  <li className='text-[#61D16A] font-semibold text-2xl'>Apartment Complex RWAs</li>
                  </div>
                  </Row>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-lg'>Commercial Buildings or Workspaces</li>
                  </div>
                  </Row>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-lg'>New constructions or Builders</li>
                  </div>
                  </Row>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-lg'>Parking Operators and Facility Management </li>
                  </div>
                  </Row>
                  <Row className='align-items-center'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-lg'>Schools, Colleges Campuses and Education </li>
                  </div>
                  </Row>

                </ul>
              </div>
              <div className='d-none d-md-block'>
                <Image src={SolutionsSVG} alt={'solutions'}></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className=''>
        {/*BOLT Solutions For Government Agencies*/}
        <Container className="mx-auto">
          <Col sm="12" md="10" lg="12" className='p-4'>
            <div className='section-title mb-4'>BOLT Solutions <span className='rounded-divider'>For <span className='rounded-divider'></span>Government Agencies</span></div>
            <div className='section-para'>
              <p className='mb-4'>BOLT has built the largest electric vehicle (EV) charging network, with solutions for every type of business in the ecosystem. Our team of EV experts have the tech know-how to make EVs smarter while also offering the most seamless charging experience, covering EV charging inside and out.</p>  
              <p className='mb-4'>
              BOLT is the right solution for your business to keep your EV customers, employees, visitors, residents and partners happy.
              </p>
            </div>
          </Col>
          <Row>
            <Col sm="12" md="" lg="6" className='d-flex flex-col justify-between'>
              <div className='mt-4 d-none d-md-block'>
                <ul>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-bg'/></div>
                  <div className='ml-4'>
                  <li className='text-[#61D16A] font-semibold text-2xl'>City and Municipal Level Entities</li>
                  </div>
                  </Row>
                  <Row className='align-items-center mb-4'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-xl'>State and Central Entities</li>
                  </div>
                  </Row>
                  <Row className='align-items-center'>
                  <div><hr className='hr-sm'/></div>
                  <div className='ml-4'>
                  <li className='text-gray-400 font-semibold text-xl'>Utilities</li>
                  </div>
                  </Row>

                </ul>
              </div>
              <div className='d-none d-md-block'>
                <Image src={SolutionsSVG} alt={'solutions'}></Image>
              </div>
            </Col>
            <Col sm="12" md="" lg="6" className='bg-[#3D3D3D] p-4 mx-auto'>
              <p className='text-[#FFFFFF] font-bold text-3xl mb-4'>Discover Solutions for City and Municipal Level Entities</p>
              <p className='text-[#FFFFFF] font-normal text-lg mb-4'>Attract Residents and Increase Your Property Value by Providing a Premium EV Charging Experience.Partner with us for a smooth transition to pollution-free living with EV charging solutions within your complexes.</p>
              <div className='mb-4'>
                {listApartment.map((list) => {
                  return(
                    <ul key="id">
                      <li className='text-[#FFFFFF] font-normal text-lg mb-1'><span className='d-flex align-items-center gap-2'><BsArrowRight className='text-[#61D16A]'/>{list}</span></li>
                    </ul>
                  )
                })}
              </div>
              <Button className='d-flex align-items-center gap-2 mb-4 bg-[#14A800] text-base font-semibold'>Discover All Solutions <span><BsArrowRight/></span> </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* advisor form */}
      <section className='advisor-form bg-[#3D3D3D] pt-3 pt-md-5'>
        <Form />
      </section>
      <Footer />
    </Fragment>
  )
}

export default Solutions