import {React, Fragment, useState} from 'react'
import Footer from 'components/footer/footer'
import Header from 'components/header/Header'
import Image from 'next/image'
import HomeSVG from "../../assets/svg/headers/Home.svg";
import HelpCentreSVG from "../../assets/svg/helpcentre/helpcentre.svg";
import FlashSVGOutlined from "../../assets/svg/flash/flashoutlined.svg";
import OurClientsSVG from "../../assets/svg/ourclients/ourclients.svg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faq } from "../../helpers/constant";
import Link from 'next/link';
import { Box, Button, Card, CardActions, CardContent } from '@mui/material';
import ContentHeader from 'components/header/ContentHeader';
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { FiSearch } from 'react-icons/fi';
import MyAccordion from 'components/myAccordion';

const Business = () => {
  const [expanded, setExpanded] = useState("");

  return (
    <Fragment>
      <Header/>
      <section className='banner banner-home'>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-8 col-md-8 col-lg-8 banner-content-sm">
            <span className='header-title'>Help Centre</span>
            <p className="banner-content-description">Do you have a question? You&apos;re in the right place.</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-none d-sm-block img">
              <Image
                src={HelpCentreSVG}
                alt={"HelpCentre Logo"}
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
      <ContentHeader />
      <section>
        <div className="container-fluid">
          <div className="content-header row justify-center">
            <div className="col-12 col-sm-12 col-md-10 col-lg-8">
            <div className='mb-4'>
                <InputGroup>
                  <InputGroupText className='custom'><FiSearch/></InputGroupText>
                  <Input className='custom-input' placeholder="Search..." />
                </InputGroup>
              </div>
              <div className='bolt-solution-holder'>
                <MyAccordion/>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-4 justify-center">
            <Card sx={{ height: 402, width: 327, backgroundColor:"#3D3D3D", borderRadius:"16px"}}>
              <CardContent>
                <Box sx={{padding: '1rem'}}>
                  <Image src={FlashSVGOutlined} alt={''}></Image>
                </Box>
                <Box sx={{padding: '1rem'}}>
                <Typography className='text-white' variant="h5" component="div">
                  Contact Support
                </Typography>
 
                <Typography className='text-white' variant="body2" marginTop={"1rem"}>
                Find out how BOLT can improve the commercial appeal of your business.<br/>Check out the FAQs below.
                </Typography>
                </Box>
              </CardContent>
              <Box sx={{padding:'2rem'}}>
                <Link href={''} passHref={true}>
                  <Typography className="text-[#3FD18E] font-semibold">Connect Now</Typography>
                </Link>
              </Box>
            </Card>
            <Card sx={{ height:402, width:327, marginTop:'64px', backgroundColor:"#3D3D3D", borderRadius:"16px"}}>
              <CardContent>
                <Box sx={{padding: '1rem'}}>
                  <Image src={OurClientsSVG} alt={''}></Image>
                </Box>
                <Box sx={{padding: '1rem'}}>
                <Typography className='text-white' variant="h5" component="div">
                  Our Clients
                </Typography>
 
                <Typography className='text-white' variant="body2" marginTop={"1rem"}>
                We are proud to partner with other market leaders and industry pioneers across India and around the globe.
                </Typography>
                </Box>
              </CardContent>
              <Box sx={{padding:'2rem'}}>
                <Link href={''} passHref={true}>
                  <Typography className="text-[#3FD18E] font-semibold">Learn More About Our Partnership Program</Typography>
                </Link>
              </Box>
            </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Fragment>
  )
}

export default Business