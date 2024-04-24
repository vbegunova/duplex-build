import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #131313;
  z-index: 999;

  /* transform: translateX(100%);
  transition: transform 250ms ease-in-out; */
`;

export const Container = styled.div`
  ${ContainerStyled}
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  margin-bottom: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 164px;
  height: 53px;
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
`;

export const MobileMenuIcon = styled.svg`
  stroke: #1b1b29;
  width: 51px;
  height: 51px;
`;

export const Title = styled.p`
  margin-bottom: 55px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: -0.4px;
  line-height: 1;
  color: ${globalColors.white};
`;

export const List = styled.ul`
  margin-bottom: 81px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'VisueltPro';
  font-weight: 400;
  font-size: 28px;
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
