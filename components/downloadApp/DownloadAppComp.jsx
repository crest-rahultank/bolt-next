import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import PhonesSVG from "../../assets/svg/phones/PhonesSVG.svg";
import Smartphone from "../../assets/images/smartphone.png";
import QRSVG from "../../assets/svg/qrcode/qrcode.svg";
import PlayStoreSVG from "../../assets/svg/playstore/googleplay.svg";
import AppStoreSVG from "../../assets/svg/appstore/appstore.svg";
import {useRouter} from "next/router"

const DownloadAppComp = () => {
  const router = useRouter();

  return (
    <Container fluid>
        <Row>
          <Col sm={12} md={12} lg={6}>
              <div className='smartphone-image-wrapper'></div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Row>
                <Col sm={12} md={12} lg={12}>
                  <Row className='justify-center'>
                    {console.log(router.pathname)}
                    <p className={router.pathname == '/download'?'text-[#3D3D3D] font-bold text-4xl':'text-white font-bold text-4xl'}>Download the <span className='thickline'>Bolt App</span></p>
                    <p className={router.pathname == '/download'?'text-[#3D3D3D] text-lg font-normal mt-5':'text-white text-lg font-normal mt-5'}>To download BOLT App, simply scan the QR codes below or search for the app on the Google Play Store or the App Store.</p>
                  </Row>
                </Col>
              <div className='w-100 mt-3 pb-3 pb-md-4 pb-md-5'>
                <Col sm={12} md={12} lg={12}>
                  <Row className='mt-4 justify-center'>
                    <p className={router.pathname == '/download'?'text-[#3D3D3D] font-bold text-base':'text-white font-bold text-base'}>Scan QR code with your phone camera</p>
                  </Row>
                  <Row className="mt-4">
                    <Col sm={12} md={6} lg={6}>
                      <div className='d-flex flex-column gap-3'>
                        <Image src={QRSVG} alt={'qr'}></Image>
                        <Image src={PlayStoreSVG} alt={'playstore'}></Image>
                      </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                    <div className='d-flex flex-column gap-3'>
                      <Image src={QRSVG} alt={'qr'}></Image>
                      <Image src={AppStoreSVG} alt={'playstore'}></Image>
                    </div>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default DownloadAppComp