import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  Row,
  Col,
  List,
} from 'reactstrap';
import LogoSVG from "../../assets/svg/Logo/Logo.svg";
import gpblack from "../../assets/svg/headers/google-play.svg";
import asblack from "../../assets/svg/headers/app-store.svg";
import DriverMenu from "../../assets/svg/headers/driver-menu-img.svg";
import BusinessMenu from "../../assets/images/businessPreview.png";
import Image from 'next/image';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BiSearch } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

function NavigationHeader(args){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='headerWrapper'>
      <Navbar {...args}
        className='main-header position-relative'
        expand="xl"
        color='dark'
        dark
      >
        <NavbarBrand
          className='px-0 px-md-3'
          href="/"
        >
          <Image src={LogoSVG} alt={'logo SVG'}></Image>
        </NavbarBrand>
        <NavbarToggler 
          onClick={toggle}
          color="#FFFFFF"
          />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto flex-1 justify-center" navbar>
            <UncontrolledDropdown nav inNavbar className='mx-0 mx-md-4'>
              <DropdownToggle nav caret>
                For drivers <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 1L6.5 6L1.5 1" stroke="#ECECEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </DropdownToggle>
              <DropdownMenu className='p-0'>
                <Row className='m-0 w-100'>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-4'>Get started</h3>
                      <List className='mb-32'>
                        <li className='megamenu_nav_link mb-4'><Link href={'/auth/signup'}>Create Account</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/auth/login'}>Login </Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Locate a Charger</Link></li>
                      </List>
                      <h3 className='megamenu_nav_title download-app mb-3 mt-0 mt-md-4 mt-lg-5'>Download Our App</h3>
                      <div className='downloadbutton_wrapper w-100 align-items-start d-flex flex-column flex-md-row flex-wrap flex-md-nowrap mb-3 mb-md-4'>
                        <Link href={'https://play.google.com/store/apps/details?id=com.revos.bolt.android'} passHref={true}><Image src={gpblack} alt={''}></Image></Link>
                        <Link href={'https://apps.apple.com/in/app/bolt-revos/id1541141946'} passHref={true}><Image src={asblack} alt={''} className="ml-0 ml-md-3 mt-3 mt-md-0"></Image></Link>    
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-32'>solutions for individual</h3>
                      <List>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/home'}>Charger for Home</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/building'}>Charger for Apartment Building</Link></li>
                      </List>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-32'>Learn more</h3>
                      <List>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/why-bolt-charger'}>Why BOLT Charger?</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/how-to-charge'}>How to Charge</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Resources</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/faq/drivers'}>FAQ</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/blog'}>Our Blog</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Contact Us</Link></li>
                      </List>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3" className='subMenu_img-wrapper drivers'>
                    <div className='last-col-wrapper h-100 d-flex flex-column p-3'>
                      <div className='col-img text-center mb-2 drivers '>
                        <Image src={DriverMenu} alt="Driver Menu" />
                      </div>
                      <div className='col-button text-center'>
                        <Button>Buy Charger</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className='mx-0 mx-md-4'>
              <DropdownToggle nav caret>
                For Businesses <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 1L6.5 6L1.5 1" stroke="#ECECEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </DropdownToggle>
              <DropdownMenu className='p-0'>
                <Row className='m-0 w-100'>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-4'>solutions for business </h3>
                      <List className='mb-32'>
                        <li className='megamenu_nav_link mb-4'>
                          <Link href={'/auth/signup'}>Create Account</Link>
                          <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </li>
                        <li className='megamenu_nav_link mb-4'>
                          <Link href={'/software/services'}>Software Services</Link>
                          <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </li>
                        <li className='megamenu_nav_link mb-4'>
                          <Link href={''}>Hardware Services</Link>
                          <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </li>
                      </List>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg={{offset: 3, size: 3}} xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-32'>Learn more</h3>
                      <List>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/why-bolt-charger'}>Why BOLT Charger?</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/how-to-charge'}>How to Charge</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Resources</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/faq/drivers'}>FAQ</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/blog'}>Our Blog</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Contact Us</Link></li>
                      </List>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3" className='subMenu_img-wrapper business'>
                    <div className='last-col-wrapper h-100 d-flex flex-column p-3'>
                      <div className='col-img text-center mb-2 business'>
                        {/* <Image src={BusinessMenu} /> */}
                      </div>
                      <div className='col-button text-center'>
                        <Button>Connect With Advisor</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className='mx-0 mx-md-4'>
              <DropdownToggle nav caret>
                Bolt Ecosystem <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 1L6.5 6L1.5 1" stroke="#ECECEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </DropdownToggle>
              <DropdownMenu className='p-0'>
                <Row className='m-0 w-100'>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-4'>Get started</h3>
                      <List className='mb-32'>
                        <li className='megamenu_nav_link mb-4'><Link href={'/auth/signup'}>Create Account</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/auth/login'}>Login </Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Locate a Charger</Link></li>
                      </List>
                      <h3 className='megamenu_nav_title download-app mb-3 mt-0 mt-md-4 mt-lg-5'>Download Our App</h3>
                      <div className='downloadbutton_wrapper w-100 align-items-start d-flex flex-column flex-md-row flex-wrap flex-md-nowrap mb-3 mb-md-4'>
                        <Link href={'https://play.google.com/store/apps/details?id=com.revos.bolt.android'} passHref={true}><Image src={gpblack} alt={''}></Image></Link>
                        <Link href={'https://apps.apple.com/in/app/bolt-revos/id1541141946'} passHref={true}><Image src={asblack} alt={''} className="ml-0 ml-md-3 mt-3 mt-md-0"></Image></Link>    
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-32'>solutions for individual</h3>
                      <List>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/home'}>Charger for Home</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/building'}>Charger for Apartment Building</Link></li>
                      </List>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-32'>Learn more</h3>
                      <List>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/why-bolt-charger'}>Why BOLT Charger?</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/charger/how-to-charge'}>How to Charge</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Resources</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/faq/drivers'}>FAQ</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={'/blog'}>Our Blog</Link></li>
                        <li className='megamenu_nav_link mb-4'><Link href={''}>Contact Us</Link></li>
                      </List>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="3" xl="3" className='subMenu_img-wrapper'>
                    <div className='last-col-wrapper h-100 d-flex flex-column p-3'>
                      <div className='col-img text-center mb-2'></div>
                      <div className='col-button text-center'>
                        <Button>Connect With Advisor</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className='mx-0 mx-md-4'>
              <DropdownToggle nav caret>
                Company <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 1L6.5 6L1.5 1" stroke="#ECECEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </DropdownToggle>
              <DropdownMenu className='p-0'>
                <Row className='m-0 w-100'>
                  <Col xs="12" sm="12" md="6" lg="7" xl="7">
                    <div className='subMenu_col p-2 p-md-3 p-lg-5'>
                      <h3 className='megamenu_nav_title mb-4'>Our Company</h3>
                      <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6">
                          <List className='mb-32'>
                            <li className='megamenu_nav_link mb-4'>
                              <Link href={'/auth/signup'}>Create Account</Link>
                              <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </li>
                            <li className='megamenu_nav_link mb-4'>
                              <Link href={'/software/services'}>Software Services</Link>
                              <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </li>
                            <li className='megamenu_nav_link mb-4'>
                              <Link href={''}>Hardware Services</Link>
                              <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </li>
                          </List>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6">
                          <List className='mb-32'>
                            <li className='megamenu_nav_link mb-4'>
                              <Link href={'/auth/signup'}>Create Account</Link>
                              <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </li>
                            <li className='megamenu_nav_link mb-4'>
                              <Link href={'/software/services'}>Software Services</Link>
                              <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </li>
                            <li className='megamenu_nav_link mb-4'>
                              <Link href={''}>Hardware Services</Link>
                              <p className='descrp'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </li>
                          </List>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg={{offset: 2, size: 3}} xl="3" className='subMenu_img-wrapper'>
                    <div className='last-col-wrapper h-100 d-flex flex-column p-3'>
                      <div className='col-img text-center mb-2'>
                      </div>
                      <div className='col-button text-center'>
                        <Button>Connect With Advisor</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className='d-flex align-items-center mt-4 mt-md-0'>
            <BiSearch
              size={24}
              color='#FFFFFF'
              className='ml-0 mr-4'
              />            
              <div className='getstarted-btn'>
                <Button
                  color="primary"
                >
                  Get Started
                </Button>
              </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationHeader;