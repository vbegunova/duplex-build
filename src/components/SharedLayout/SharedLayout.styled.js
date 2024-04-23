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
  .header .menu {
    display: none;
  }

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
