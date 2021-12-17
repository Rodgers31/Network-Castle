import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  Herobg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <Herobg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Herobg>
      <HeroContent>
        <HeroH1>Nativating you through all of your digital needs </HeroH1>
        <HeroP>
          Layers Network will be your one-stop shop for all your digital needs,
          from website building and maintaining, to online business
          advertisement. We've got you covered.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
