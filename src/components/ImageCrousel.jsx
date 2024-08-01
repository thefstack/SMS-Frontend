import React, { useState } from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import image1 from '../images/crousel1.jpg';
import image2 from '../images/crousel2.jpg';

const images = [image1, image2];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const leftCarousel = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex <= 0 ? images.length - 1 : prevIndex - 1));
  };

  const rightCarousel = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex >= images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Wrapper>
      <CarouselInnerCont style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <ChevronLeftIcon style={{ fontSize: '5vw' }} className='leftIcon' onClick={leftCarousel} />
        <ChevronRightIcon style={{ fontSize: '5vw' }} className='rightIcon' onClick={rightCarousel} />
      </CarouselInnerCont>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 700px) {
    height: 300px;
  }

  @media (max-width: 500px) {
    height: 250px;
  }

  @media (max-width: 300px) {
    height: 80vw;
    min-height: 200px;
    min-width: 200px;
  }
`;

const CarouselInnerCont = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .rightIcon,
  .leftIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    background-color: rgba(14, 14, 14, 0.5);
    border-radius: 5px;
    cursor: pointer;
    z-index: 99;
  }

  .rightIcon {
    right: 20px;
  }

  .leftIcon {
    left: 20px;
  }
`;

export default ImageCarousel;
