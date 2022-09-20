import {React,Fragment} from 'react'
import BuildingSVG from "../../assets/svg/headers/Building.svg";
import ChartSVG from "../../assets/svg/headers/Chart.svg";
import ThunderSVG from "../../assets/svg/headers/Background-Thunder.svg";

import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip from '@mui/material/Chip';
import { buildingAdvantages } from "../../helpers/constant";
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import Form from 'components/form/Form';

const building = () => {
  return (
    <Fragment>
      <Header/>
      {/* Banner with Heading & Home Icon */}
      <section className="banner banner-building">
        <div className="container-fluid">
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 banner-content-sm">
                  <span className='header-title'>Charging For Apartment Building</span>
                  <p className="banner-content-description">By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-none d-sm-block img">
                  <Image
                    src={BuildingSVG}
                    alt={"Building Logo"}
                    width={300}
                    height={200}
                    layout='responsive'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advantage-section with Heading & Benefit Tags */}
      <section className='advantage-section'>
        <div className="container-fluid">
          <div className="content-header row justify-content-center">
            <div className="col-12 col-sm-12 col-md-10 col-lg-8 text-center">
              <p className='mb-0'>Use the BOLT Charging Point for Your </p> 
              <p className="rounded-divider">Apartment Complex</p>
              <div className="content-description">
              <p className='mb-0'>BOLT charging devices are low-cost, highly performant residential charging devices. Install them in your apartment complex parking spot, and charge other EV users in your building to use your charging point.</p>
              <div className='d-inline'>
                {
                  // eslint-disable-next-line react/jsx-key
                  buildingAdvantages.map((benefit) => { return <Chip size={'medium'} className="advantage-chip bg-white" icon={<CheckCircleIcon />} label={benefit} /> })
                }
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section className='generate-passive-income'>
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
              <div className='content-header'>Generate <span className="rounded-divider">Passive Income</span></div>
              <div className='content-blog-detail'>
                <p>As a property manager, you need to maximize your income.</p>
                <p>Transform your parking spaces into passive income-generating opportunities using our BOLT residential charging device.</p>
                <p>You’ll get more free cash flow each month! Who can say NO to that?</p>
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
      <section className='add-value-to-prop shade'>
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
              <div className='content-header'><span className="rounded-divider">Add Value </span> to Your Property</div>
              <div className='content-blog-detail'>
                <p>Property managers always worry about depreciation.</p>
                <p>The BOLT charging device increases your apartment complex’s value!</p>
                <p>You may end up increasing your valuation by 10 to 15%. And that’s something every owner wants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='increase-rent'>
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
              <div className='content-header'><span className="rounded-divider">Increase Rent</span></div>
              <div className='content-blog-detail'>
                <p>It can be challenging to ask for rent increases. The BOLT charging point can add value to your apartment units, making rental increases more justifiable.</p>
                <p>Make your tenants happier and generate more revenue with a BOLT charging point! </p>
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
      <section className='govt-subsidies shade'>
        {/*Simple Installation */}
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
              <div className='content-header'><span className="rounded-divider">Government Subsidies</span></div>
              <div className='content-blog-detail'>
                <p>The government is attempting to reduce CO2 emissions and improve India’s ecosystem.</p>
                <p>Take advantage of the current government subsidies for businesses to purchase EV charging stations.</p>
                <p>BOLT charging units are some of the cheapest on the market, and they’re far lower than provisioned subsidies. You’ll help India meet its EV targets effectively!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='reduce-resident-turnaround'>
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
              <div className='content-header'>Reduce <span className="rounded-divider">Resident Turnaround </span></div>
              <div className='content-blog-detail'>
                <p>Very few apartment complex residents own an EV because they don’t think they have the means to charge them.</p>
                <p>Give EV owners what they want with a BOLT charging point! Your tenants will be less likely to leave and you’ll improve your property’s profitability.</p>
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
      <section className='get-better-tenants shade'>
        {/*Low-Cost Charging Device */}
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
              <div className='content-header'>Get <span className="rounded-divider">Better Tenants</span></div>
              <div className='content-blog-detail'>
                <p>EV owners tend to be happier, healthier, and more stable tenants. Install a BOLT charging station to add value to your property and attract higher-paying EV owners.</p>
                <p>Offer your tenants a modern amenity and support their high-quality lifestyle. Boost your reputation as a forward-thinking property manager!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='advisor-form bg-[#3D3D3D] pt-3 pt-md-5'>
        <Form />
      </section>
      <Footer/>
    </Fragment>
  )
}

export default building