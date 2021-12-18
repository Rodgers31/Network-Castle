import React from 'react';
import Icon1 from '../../logoImg/svg-4.svg';
import Icon2 from '../../logoImg/svg-5.svg';
import Icon3 from '../../logoImg/svg-4.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help build an serch engine optomized website using best practices
            to help show your website futher up on search results
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Be part of the building process</ServicesH2>
          <ServicesP>
            We help build an serch engine optomized website using best practices
            to help show your website futher up on search results
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>We even build large scale projects</ServicesH2>
          <ServicesP>
            We help build an serch engine optomized website using best practices
            to help show your website futher up on search results
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
