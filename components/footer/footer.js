import React from 'react';
import LogoSVG from "../../assets/svg/Logo/Logo.svg";
import GoogleSVG from "../../assets/svg/Logo/googleStore.svg";
import AppleSVG from "../../assets/svg/Logo/AppleStore.svg";
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import Image from 'next/image';
import { Container, Col, Row, List, ListInlineItem } from 'reactstrap';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <section className='footer_wrapper bg-[#0F0F0F]'>
        <div className='main-footer text-white pt-5 pb-3 paddx-36'>
          <Container fluid>
            <Row className='mb-4' xs={"1"} sm={"1"} md={"4"} lg={"4"} xl={"4"}>
              <Col>
                <div className='mb-4'>
                <Image src={LogoSVG} alt={''}></Image>
                </div>
                <p className='footer_text'>
                  BOLT is on a mission to push emerging markets towards cleaner mobility. Today, the company is the largest electric vehicle (EV) charging infrastructure solution provider in India, with 15,000+ charging points and growing! Join the revolution!
                </p>
              </Col>
              <Col>
                <h3 className='footer_widget_title mb-32'>FOR DRIVERS</h3>
                <List>
                  <li className='footer_link mb-3'><Link href={''}>Locate a Charger</Link></li>
                  <li className='footer_link mb-3'><Link href={'/charger/home'}>Charger for Home</Link></li>
                  <li className='footer_link mb-3'><Link href={'/charger/building'}>Charger for Apartment Building</Link></li>
                </List>
              </Col>
              <Col>
                <h3 className='footer_widget_title mb-32'>FOR BUSINESSES</h3>
                <List>
                  <li className='footer_link mb-3'><Link href={''}>Discover All Industries</Link></li>
                  <li className='footer_link mb-3'><Link href={''}>BOLT Software</Link></li>
                  <li className='footer_link mb-3'><Link href={''}>BOLT Charging Network</Link></li>
                </List>
              </Col>
              <Col>
                <h3 className='footer_widget_title mb-32'>INVESTORS</h3>
                <List>
                  <li className='footer_link mb-3'><Link href={''}>Presentation</Link></li>
                  <li className='footer_link mb-3'><Link href={''}>Press Releases</Link></li>
                </List>
              </Col>
            </Row>
            <Row xs={"1"} sm={"1"} md={"4"} lg={"4"} xl={"4"}>
              <Col>
                <Row xs={"1"} sm={"1"} md={"1"} lg={"1"} xl={"1"} className='bg-[#0F0F0F] text-white'>
                  <Col>
                    <h3 className='footer_widget_title mb-32'>DOWNLOAD OUR APPS</h3>
                  </Col>
                  <Col>
                    <div className='mb-3'>
                      <Link href={'https://play.google.com/store/apps/details?id=com.revos.bolt.android'} passHref={true}><Image src={GoogleSVG} alt={''}></Image></Link><br />
                    </div>
                  </Col>
                  <Col>
                    <div className='mb-3'>
                    <Link href={'https://apps.apple.com/in/app/bolt-revos/id1541141946'} passHref={true}><Image src={AppleSVG} alt={''}></Image></Link><br />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h3 className='footer_widget_title mb-32'>Resources</h3>
                <List>
                  <li className='footer_link mb-3'><Link href={'/auth/login'}>Login</Link></li>
                  <li className='footer_link mb-3'><Link href={'/charger/how-to-charge'}>How to Charge</Link></li>
                  <li className='footer_link mb-3'><Link href={'/faq/drivers'}>FAQ</Link></li>
                  <li className='footer_link mb-3'><Link href={'/blog'}>Our Blog</Link></li>
                </List>
              </Col>
              <Col>
                <h3 className='footer_widget_title mb-32'>COMPANY</h3>
                <List>
                  <li className='footer_link mb-3'><Link href={''}>About Us</Link></li>
                  <li className='footer_link mb-3'><Link href={''}>Leadership Team</Link></li>
                  <li className='footer_link mb-3'><Link href={''}>Why BOLT</Link></li>
                  <li className='footer_link mb-3'><Link href={''}>Contact Us</Link></li>
                  <li className='footer_link mb-3'><Link href={''}>BOLT &amp; Green Revolution</Link></li>
                </List>
              </Col>
              <Col>
                <h3 className='footer_widget_title mb-3'>FOLLOW US</h3>
                <div className='d-flex'>
                  <div className='mr-3'>
                    <Link href={'https://www.facebook.com/BOLTEarth'} passHref={true}><FaFacebookSquare size={24} /></Link>
                  </div>
                  <div className='mr-3'>
                    <Link href={'https://twitter.com/bolt_earth'} passHref={true}><FaTwitterSquare size={24} /></Link>
                  </div>
                  <div className='mr-3'>
                    <Link href={'https://www.linkedin.com/company/boltearth'} passHref={true}><AiFillLinkedin size={24} /></Link>
                  </div>
                  <div className='mr-3'>
                    <Link href={'https://www.instagram.com/bolt.earth/'} passHref={true}><AiFillInstagram size={24} /></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='copyright-bar py-4 paddx-36'>
          <Container fluid>
            <Row>
              <Col xs={"12"} sm={"12"} md={"3"} lg={"2"} xl={"2"}>
                <div className='copyright my-3'>
                  &copy; BOLT 2022.
                </div>
              </Col>
              <Col xs={"12"} sm={"12"} md={"9"} lg={"10"} xl={"10"}>
                <List type="inline" className='bottom-links my-1'>
                  <ListInlineItem className='mr-3 my-2'>
                    <Link href={''}>Privacy &amp; Security Policy</Link>
                  </ListInlineItem>
                  <ListInlineItem className='mr-3 my-2'>
                    <Link href={''}>General Terms &amp; Conditions</Link>
                  </ListInlineItem>
                  <ListInlineItem className='mr-3 my-2'>
                    <Link href={''}>Payment Terms &amp; Conditions</Link>
                  </ListInlineItem>
                </List>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='bottom_footer paddx-36'>
        <Container fluid>
          <Row className='justify-center'>
            <Col xs={"12"} sm={"12"} md={"12"} lg={"10"} xl={"11"}>
              <Row className=''>
                <Col xs={"12"} sm={"12"} md={"6"} lg={"6"} xl={"6"}>
                  <div className='bottom_footer_text py-4'>
                    <p className='heading'>Speak With Professional</p>
                    <p className='subheading'>Cool subtitle goes here</p>
                  </div>
                </Col>
                <Col xs={"12"} sm={"12"} md={"6"} lg={"6"} xl={"6"} className="text-right">
                  <div className='flash-img py-4 h-100'>
                    <button className='btn btn-lg text-white connectAdv_btn'>Connect With Your Advisor</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;