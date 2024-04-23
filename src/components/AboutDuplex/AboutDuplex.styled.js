import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  padding-top: 56px;

  @media screen and (min-width: 1440px) {
    padding-top: 95px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
  padding-bottom: 536px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 500px;
  }
`;

export const TextBox = styled.div`
  margin-bottom: 26px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    display: flex;
    gap: 84px;
  }
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 42px;
  color: ${globalColors.darkTitle};
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    font-size: 108px;
    width: 608px;
    text-align: right;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: ${globalColors.darkText};
  line-height: 1.3;

  @media screen and (min-width: 1440px) {
    font-size: 19px;
    width: 419px;
    line-height: 1.4;
  }
`;

export const TextBoxDescription = styled(Description)`
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const SubscriptionBox = styled.div`
  @media screen and (min-width: 1440px) {
    margin-left: 150px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${globalColors.darkTitle};
  margin-bottom: 17px;

  @media screen and (min-width: 1440px) {
    font-size: 29px;
    width: 420px;
    text-align: right;
    margin-bottom: 13px;
  }
`;

export const SecondDescription = styled(Description)`
  @media screen and (min-width: 1440px) {
    text-align: right;
    width: 380px;
    margin-left: 40px;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RoundElem = styled.img`
  width: 215px;
  height: 215px;
  position: absolute;
  animation: ${spin} 15s linear infinite;
  top: 570px;
  right: 75px;
  z-index: 1;

  @media screen and (min-width: 1440px) {
    width: 335px;
    height: 335px;
    top: 409px;
    right: 384px;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 10;

  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const ImageDesktop = styled(Image)`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const ImageMobile = styled(Image)`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
