import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FootLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElemets';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FootLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='/sigin'>How it works</FooterLink>
              <FooterLink to='/sigin'>Testimonilas</FooterLink>
              <FooterLink to='/sigin'>Careers</FooterLink>
              <FooterLink to='/sigin'>Investors</FooterLink>
              <FooterLink to='/sigin'>Terms of services</FooterLink>
            </FootLinkItems>
            <FootLinkItems>
              <FooterLinkTitle>Some of our projects</FooterLinkTitle>
              <FooterLink to='/sigin'>How it works</FooterLink>
              <FooterLink to='/sigin'>Testimonilas</FooterLink>
              <FooterLink to='/sigin'>Careers</FooterLink>
              <FooterLink to='/sigin'>Investors</FooterLink>
              <FooterLink to='/sigin'>Terms of services</FooterLink>
            </FootLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FootLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to='/sigin'>How it works</FooterLink>
              <FooterLink to='/sigin'>Testimonilas</FooterLink>
              <FooterLink to='/sigin'>Careers</FooterLink>
              <FooterLink to='/sigin'>Investors</FooterLink>
              <FooterLink to='/sigin'>Terms of services</FooterLink>
            </FootLinkItems>
            <FootLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink to='/sigin'>Instagram</FooterLink>
              <FooterLink to='/sigin'>Twitter</FooterLink>
              <FooterLink to='/sigin'>Terms of services</FooterLink>
            </FootLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
