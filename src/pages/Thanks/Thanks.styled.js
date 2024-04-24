import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 145px;
  padding-bottom: 34px;
  background-color: #131313;

  @media screen and (min-width: 1440px) {
    padding-top: 211px;
    padding-bottom: 10px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h1`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: -0.4px;
  margin-bottom: 16px;
  color: #fff;

  @media screen and (min-width: 1440px) {
    font-size: 124px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  color: #fff;
  font-size: 13px;
  line-height: 1.8;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-bottom: 34px;
  width: 195px;
  height: 71px;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.6px;
  font-size: 16px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 47px;
    width: 293px;
    height: 107px;
    font-size: 24px;
  }
`;

export const ImageMobile = styled.img`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ImageDesktop = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
