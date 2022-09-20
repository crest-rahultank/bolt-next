
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import CarouseImage from '../../assets/images/slider-image.png';
import Image from 'next/image';

const items = [
  {
    id: 1,
    tagline: "For Drivers",
    title: "Introducing BOLT Charger",
    desc: "A website wireframe, also known as a page schematic or screen blueprint.",
    buttontext: "Call to Action Button",
  },
  {
    id: 2,
    tagline: "For Businesses",
    title: "Introducing BOLT Charger",
    desc: "A website wireframe, also known as a page schematic or screen blueprint.",
    buttontext: "Call to Action Button",
  },
  {
    id: 3,
    tagline: "Bolt Ecosystem",
    title: "Introducing BOLT Charger",
    desc: "A website wireframe, also known as a page schematic or screen blueprint.",
    buttontext: "Call to Action Button",
  },
  {
    id: 4,
    tagline: "Company",
    title: "Introducing BOLT Charger",
    desc: "A website wireframe, also known as a page schematic or screen blueprint.",
    buttontext: "Call to Action Button",
  },
];

function BannerCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="landing-carousel-item px-2 px-md-4 px-lg-5"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        fade="true"
      >
        <Container fluid>
          <Row className='align-items-center'>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <p className='carousel-item-caption text-white text-uppercase'>{item.tagline}</p>
                <h1 className='carousel-item-title text-white'>{item.title}</h1>
                <p className='carousel-item-description text-white'>{item.desc}</p>
                <Button className='text-white'>{item.buttontext}</Button>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6" className='d-none d-md-block'>
              <Image src={CarouseImage} alt="Carousel image" />
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <>
      <div className='hero-carousel'>
      <style>
        {`.landing-carousel-item {
          max-width: 100%;
          height: 600px;
          padding: 0 0;
        }`}
      </style>
      <Carousel className='bg-[#0F0F0F]' activeIndex={activeIndex} interval={null} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
    </>
  );
}

export default BannerCarousel;