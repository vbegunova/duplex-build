import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';

export const Header = styled.header`
  width: 100%;
  padding-top: 40px;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (min-width: 1440px) {
    padding-top: 55px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  width: 164px;
  height: 53px;

  @media screen and (min-width: 1440px) {
    width: 188px;
    height: 61px;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'VisueltPro';
  font-weight: 400;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  color: ${globalColors.white};
`;

export const Contacts = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 17px;
  }
`;

export const SocMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SocMediaLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border-radius: 50%;
`;

export const SocMediaIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const SocMediaTelegram = styled(SocMediaIcon)`
  margin-right: 2px;
`;

export const PhoneLink = styled.a`
  color: ${globalColors.white};
  margin-top: 10px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.6px;
`;

export const MobileMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  width: 51px;
  height: 51px;
  background-image: linear-gradient(
    180deg,
    rgb(250, 250, 250) 0%,
    rgb(215, 219, 224) 90%
  );

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.svg`
  stroke: #1b1b29;
  width: 16px;
  height: 12px;
`;

export const Footer = styled.footer`
  overflow: hidden;
  background-color: ${globalColors.footerBg};
  padding-top: 44px;
  /* padding-bottom: 23px; */
  padding-bottom: 204px;

  @media screen and (min-width: 1440px) {
    padding-top: 71px;
    padding-bottom: 71px;
  }
`;

export const FooterContainer = styled.div`
  ${ContainerStyled}
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    gap: 135px;
    justify-content: start;
  }
`;

export const Info = styled.div`
  margin-bottom: 46px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 0;
  }
`;

export const Logo = styled(NavLink)`
  margin-bottom: 24px;
  margin-left: -15px;
`;

export const InfoLink = styled.a`
  margin-bottom: 12px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: ${globalColors.white};
`;

export const Copyright = styled.p`
  margin-top: 27px;
  text-transform: uppercase;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    margin-bottom: 23px;
    font-size: 20px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 1440px) {
    gap: 19px;
  }
`;

export const FooterStyledLink = styled(NavLink)`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  color: ${globalColors.white};
  font-size: 14px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const ContactsSubtitle = styled.p`
  margin-bottom: 8px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const SocMediaContactsSubtitle = styled(ContactsSubtitle)`
  margin-bottom: 15px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 18px;
  }
`;

export const FooterPhoneLink = styled.a`
  display: block;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  color: ${globalColors.white};
  font-size: 14px;
  margin-bottom: 17px;

  @media screen and (min-width: 1440px) {
    display: block;
    font-size: 16px;
    margin-bottom: 21px;
  }
`;

export const FooterSocMediaItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  background-color: ${globalColors.white};
  border-radius: 50%;

  @media screen and (min-width: 1440px) {
    width: 36px;
    height: 36px;
  }
`;

export const RoundElem = styled.img`
  width: 450px;
  height: 450px;
  position: absolute;
  top: 410px;
  right: -70px;

  @media screen and (min-width: 1440px) {
    width: 641px;
    height: 641px;
    top: -30px;
    right: -147px;
  }
`;
