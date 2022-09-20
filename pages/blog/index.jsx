import React,{Fragment} from 'react'
import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import Image from 'next/image'
import HomeSVG from "../../assets/svg/headers/Home.svg";
import BlogSVG from "../../assets/svg/blog/blog.svg";
import Form from 'components/form/Form';
import Link from 'next/link';
import BlogNav from 'components/header/BlogNav';

const Index = () => {
  return (
  <Fragment>
    <Header/>
    <section className='banner banner-home'>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-8 col-md-8 col-lg-8 banner-content-sm">
          <span className='header-title'>Get The Latest News and Events in The EV Industry</span>
          <p className="banner-content-description">Discover the latest news and events happening within the EV Industry. Gain business insights into the world of EV charging and the infrastructure that supports it.</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 d-none d-sm-block Image">
            <Image
              src={BlogSVG}
              alt={"Blog Logo"}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className="d-block d-sm-none Image">
            <Image
              src={HomeSVG}
              alt={"Home Logo"}
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
    <BlogNav />
    {/* blogs */}
    <section>
      <div className="container-fluid">
        <div className="content-header row justify-center">
          <div className="col-12 col-sm-12 col-md-10 col-lg-12">
            <div className="row justify-center">
            <div className="card-deck">
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]"><span><Link href={'/blog/detail'}>Read more</Link></span></p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
            </div>
            </div>
            <div className="row justify-center mt-3">
            <div className="card-deck">
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
            </div>
            </div>
            <div className="row justify-center mt-3">
            <div className="card-deck">
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
              <div className="card border-0">
                <Image className="card-Image-top" width={300} height={200} src={HomeSVG} alt="Card image cap"/>
                <div className="card-body">
                  <p className="text-sm"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <p className="text-sm">Card title</p>
                  <p className="text text-sm text-[#14A800]">Read more</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* contact us form */}
    <section className='advisor-form bg-[#3D3D3D] pt-3 pt-md-5'>
      <Form />
    </section>
    <Footer/>
  </Fragment>
  )
}

export default Index