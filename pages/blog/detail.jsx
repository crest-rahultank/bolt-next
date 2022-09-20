import {React, Fragment} from 'react'
import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import Image from 'next/image'
import {useRouter} from 'next/router'
import HomeSVG from "../../assets/svg/headers/Home.svg";
import BlogImg from "../../assets/images/Image.png";
import Link from 'next/link';
import { Button, Col, Container, Row } from 'reactstrap';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import DownloadAppComp from 'components/downloadApp/DownloadAppComp'

const Detail = () => {
  const router = useRouter();
  
  return (
    <Fragment>
    <Header/>
    {/* banner */}
    <section className='blog-banner banner-home'>
      <Container fluid>
        <Row>
          <Col sm={8} md={8} lg={12}>
            <Row className='py-4 px-5'>
              <button 
              className='btn btn-lg bg-[#14A800] text-white text-base font-semibold d-flex align-items-center gap-2' 
              onClick={() => {router.push('/blog/blog')}}><BsArrowLeft/>Return back to all articles</button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    {/* article */}
    <section>
      <Container fluid>
        <Row className="justify-center">
          <Col sm={12} md={10} lg={3}>
            <Row className="p-5">
              <p className='text-base font-bold'>TABLE OF CONTENT</p>
              <div className='p-3'>
                <ul>
                  <li className='text-base text-[#61D16A] mb-3'>A website wireframe, also known as a page schematic</li>
                  <li className='text-base text-[#808080] mb-3'>A website wireframe, also known as a page schematic</li>
                  <li className='text-base text-[#808080]'>A website wireframe, also known as a page schematic</li>
                </ul>
              </div>
            </Row>
          </Col>
          <Col sm={12} md={10} lg={9}>
            <Row className='justify-between p-3'>
              <button className='btn bg-[#ECECEC] mt-4 text-[#808080] text-xs font-bold'>Category #1</button>
              <p className='mt-4 text-[#808080] font-normal text-base'>June 14,2022</p>
            </Row>
            <Row>
            <p className='text-4xl font-bold text-[#3D3D3D] p-3'>Especially in web design, paper </p>
            <p className='text-xl font-normal text-[#3D3D3D] p-3'>A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.</p>

            <p className='text-[#3D3D3D] font-semibold text-2xl p-3'>Create for better world</p>
            <p className='text-lg font-normal p-3'>Risus amet, pretium bibendum cras pretium, quisque et, lectus elementum. Commodo et, urna laoreet vestibulum eu, auctor feugiat platea. Massa nunc, ac, accumsan ultricies pellentesque vitae. Imperdiet suspendisse sed gravida ultrices eget id orci. Tempor donec aliquam diam metus nec pellentesque aliquam, in scelerisque. Morbi non magna enim nulla.</p>

            <Image src={BlogImg} alt={'blogimg'} className="p-3"></Image>

            <p className='text-lg font-normal p-3'>Ut urna nisi, nulla tincidunt volutpat fringilla. Morbi ut lorem eu eget consequat. Varius nulla nunc sapien at convallis condimentum sed. Duis diam mattis eget amet cursus eget enim. Nec mauris tortor nam ullamcorper. Malesuada in tellus vel, eget sit nisi feugiat lorem amet. Viverra tincidunt at feugiat aliquam. Ullamcorper lacus in pulvinar laoreet dictum vitae porta dictumst in. Dignissim quis laoreet nulla aliquet proin vel fringilla. Cursus in adipiscing amet ipsum sem adipiscing habitant. Aliquet facilisis non varius vitae. Gravida nisl gravida diam in gravida vel vestibulum.</p>

            <p className='text-[#3D3D3D] font-semibold text-2xl p-3'>Create for better world</p>
            <p className='text-lg font-normal p-3'>Risus amet, pretium bibendum cras pretium, quisque et, lectus elementum. Commodo et, urna laoreet vestibulum eu, auctor feugiat platea. Massa nunc, ac, accumsan ultricies pellentesque vitae. Imperdiet suspendisse sed gravida ultrices eget id orci. Tempor donec aliquam diam metus nec pellentesque aliquam, in scelerisque. Morbi non magna enim nulla.</p>

            <p className='text-[#3D3D3D] font-semibold text-2xl p-3'>Create for better world</p>
            <p className='text-lg font-normal p-3'>Risus amet, pretium bibendum cras pretium, quisque et, lectus elementum. Commodo et, urna laoreet vestibulum eu, auctor feugiat platea. Massa nunc, ac, accumsan ultricies pellentesque vitae. Imperdiet suspendisse sed gravida ultrices eget id orci. Tempor donec aliquam diam metus nec pellentesque aliquam, in scelerisque. Morbi non magna enim nulla.</p>

            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    {/* more from our blog */}
    <section className='bg-[#F5F5F5]'>
      <Container fluid>
        <Row className="justify-center">
          <Col sm={12} md={10} lg={12}>
            <Row className="p-10 mx-10">
              <Col sm={6} md={6} lg={8}>
                <Row className='justify-center'>
                <p className='font-bold text-4xl'>More From <span className='rounded-divider'>Our Blog</span></p>
                </Row>
              </Col>
              <Col sm={6} md={6} lg={4}>
                <button className='btn bg-[#14A800] text-white d-flex align-items-center gap-2'>View all <BsArrowRight/></button>
              </Col>
            </Row>
            <Row className="justify-center mb-5">
            <div className="card-deck">
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800] d-flex align-items-center gap-2">Read more<BsArrowRight/></p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800] d-flex align-items-center gap-2">Read more<BsArrowRight/></p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800] d-flex align-items-center gap-2">Read more<BsArrowRight/></p>
                </div>
              </div>
            </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    {/* download App */}
    <section className='bg-[#3D3D3D] pt-3 pt-md-5'>
    <DownloadAppComp/>
    </section>
    {/* footer */}
    <Footer/>
    </Fragment>
  )
}

export default Detail