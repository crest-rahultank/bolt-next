import {React, Fragment} from 'react'
import DownloadAppComp from 'components/downloadApp/DownloadAppComp'
import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import Image from 'next/image'
import { Col, Container, Row } from 'reactstrap'
import CloudSVG from '../../assets/svg/cloud/cloud.svg'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import UpdatesForm from 'components/form/UpdatesForm'

const features = [
  "Easily navigate around any part of India",
  "Plan your charging",
  "Book and pay for charging",
  "Monitor your charging",
  "Add your charging station to the app",
  "Generate passive income"
]

const Details = () => {
  return (
    <Fragment>
      <Header/>
      {/* Banner with Heading & Home Icon */}
      <section className="bg-[#0F0F0F] text-[#ffff] p-5">
        <Container fluid>
          <Row className='justify-center'>
            <Col xs="12" sm="12" md="10" lg="7" xl="5">
              <h3 className='header-title text text-center mb-2 mb-md-4'>BOLT App: EV Freedom at Your Fingertips!</h3>
              <p className="text text-center text-xl font-normal text-[#FFFFFF]">Charging is a common challenge for many EV owners. How are you going to charge your EV? How long will it take? How far is the nearest charging station? The BOLT App answers all your questions!</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* description */}
      <section className='bg-[#F5F5F5]'>
      <Container fluid>
        <Row className='p-12'>
          <Col sm={12} md={6} lg={6}>
            <Row>
              <p className='font-bold text-3xl text-[#304659]'>BOLT App is an application we developed to make your life as an EV owner easier</p>
            </Row>
            <Row className={'d-none d-sm-block'}>
              <Image src={CloudSVG} alt={''}></Image>
            </Row>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <p className='font-normal text-xl text-[#3D3D3D]'>It shows you the locations of each of our 10,000+ charging stations across India.</p>
            <p className='font-normal text-xl text-[#3D3D3D] mt-4 mb-4'>That&apos;s not all, with the BOLT App, you can:</p>
            <ul>
              {features.map((list) => {
                return <li key='id' className='font-bold text-lg text-[#3D3D3D] d-flex gap-2 align-items-center'><BsFillCheckCircleFill color='#61D16A'/>{list}</li>
              } )}
            </ul>
            <p className='font-normal text-xl text-[#3D3D3D] mt-4'>For the ultimate EV freedom, you only need two things: the BOLT EV charging station and the BOLT app.</p>
          </Col>
        </Row>
      </Container>
      </section>
      {/* download section */}
      <section className='bg-[#FFFFFF] pt-3 pt-md-5'>
        <DownloadAppComp/>
      </section>
      {/* Discover the Latest Updates */}
      <section className='latest-updates-form bg-[#3D3D3D] d-flex align-items-center'> 
        <UpdatesForm/>
      </section>
      {/* Footer */}
      <Footer/>
    </Fragment>
  )
}

export default Details