import { Fragment } from 'react';
import HomeSVG from "../../assets/svg/headers/Home.svg";
import ChartSVG from "../../assets/svg/headers/Chart.svg";
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip from '@mui/material/Chip';
import { homeAdvantages } from "../../helpers/constant";
import Form from 'components/form/Form';

const home = () => {

  return (
    <Fragment>
      <Header />
      {/* Banner with Heading & Home Icon */}
      <section className="banner banner-home">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-8 col-md-8 col-lg-8 banner-content-sm">
            <span className='header-title'>Home Charging</span>
            <p className="banner-content-description">Charge your EV overnight using BOLT&apos;s convenient home EV charging point. Never pay a premium for using a public charging station again!</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-none d-sm-block img">
              <Image
                src={HomeSVG}
                alt={"Home Logo"}
                width={300}
                height={200}
                layout='responsive'
              />
            </div>
            <div className="d-block d-sm-none img">
              <Image
                src={HomeSVG}
                alt={"Home Logo"}
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Advantage-section with Heading & Benefit Tags */}
      <section className='advantage-section'>
        <div className="container-fluid">
          <div className="content-header row justify-content-center">
            <div className="col-12 col-sm-12 col-md-10 col-lg-8 text-center">
              <p className='mb-0'>Why Install a </p>
              <p className="rounded-divider">BOLT Home Charging Point</p>
              <div className="content-description">
              <p className='mb-0'>Get the BOLT charging device to join our charging network and generate a passive income. The BOLT app handles all booking and payments, and it allows you to set the premium you want users to pay for using your device.</p>
              <div className='d-inline'>
                {
                  // eslint-disable-next-line react/jsx-key
                  homeAdvantages.map((benefit) => { return <Chip size={'medium'} className="advantage-chip bg-white" icon={<CheckCircleIcon />} label={benefit} /> })
                }
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section className='simple-scan'>
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
              <div className='content-header'>Simple <span className="rounded-divider">Scan-Pay-Charge Process</span></div>
              <div className='content-blog-detail'>
                <p>Wondering how to pay each time you charge is frustrating. With BOLT, the process is simple. </p>
                <p>Our straightforward and user-friendly scan-pay-charge process enables you to charge your vehicle anywhere without any hassle. </p>
                <p>payments is automatically handled by the BOLT OS, enabling you to plug in fast!
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
      <section className='faster-safer-charging shade'>
      {/*Faster and Safer Charging */}
        <div className='mx-auto container shade'>
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
              <div className='content-header'><span className="rounded-divider">Faster and Safer </span> Charging</div>
              <div className='content-blog-detail'>
                <p>Dealing with high voltage electricity can make anyone nervous about using a charging point.</p>
                <p>Put your fears to rest with BOLT&apos;s Open Charge Point Protocol (OCPP)! We provide you with both fast and safe charging using industry-standard power management. </p>
                <p>Charge your EV with one of the fastest home charging devices on the market. Our powerful BOLT charging point works at 220V 13A residential power, enabling it to power your EV at ~3.3 kiloWatts.</p>
                <p>This ensures your EV is charged up overnight so you&apos;re ready to go the next day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='connected-and-smart shade'>
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
              <div className='content-header'>Connected and <span className="rounded-divider">Smart</span></div>
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
      <section className='simple-install shade'>
        {/*Simple Installation */}
        <div className='mx-auto container shade'>
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
                <div className='content-header'><span className="rounded-divider">Simple Installation</span></div>
                <div className='content-blog-detail'>
                  <p>Don&apos;t get into an installation hassle with your home charging device. Simply get a BOLT charging point and an electrician! </p>
                  <p>Your charging point will be up and running in no time. Add this charger to the app and start generating passive income. </p>
                  <p>Get cost-effective and convenient charging while you focus on life&apos;s more pressing issues.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className='personal-charging'>
        {/* Personal Charging Incentives */}
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
              <div className='content-header'>Personal <span className="rounded-divider">Charging Incentives</span></div>
              <div className='content-blog-detail'>
                <p>Don&apos;t worry about increasing your electricity consumption with home charging. </p>
                <p>The Indian government gives subsidies to electricity suppliers for home EV charging. Get a BOLT charging point and take advantage of cheaper electricity. </p>
                <p>Help India reach its targets for EV adoption! </p>
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
      <section className='low-cast-charging-device shade'>
        {/*Low-Cost Charging Device */}
        <div className='mx-auto container shade'>
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
              <div className='content-header'>Low-Cost <span className="rounded-divider">Charging Device</span></div>
              <div className='content-blog-detail'>
                <p>You don&apos;t have to spend an enormous amount to get a charging device. </p>
                <p>BOLT has scaled its manufacturing solutions to give you cheaper EV charging points. This has helped us occupy 50% of the EV charging market. </p>
                <p>Get our charging point today and join BOLT&apos;s country-wide charging network! </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='advisor-form bg-[#3D3D3D] pt-3 pt-md-5'>
        <Form />
      </section>
      <Footer />
    </Fragment>
  );
};

export default home;