import styled from 'styled-components';
import background from '../../images/home/hero-background-desktop.jpg';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from 'Styled/GlobalColors';

export const Section = styled.section`
  padding-top: 155px;
  padding-bottom: 160px;
  background-image: linear-gradient(
      180deg,
      rgba(88, 100, 115, 0.6) 0%,
      rgba(88, 100, 115, 0) 70%
    ),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1440px) {
    padding-top: 168px;
    padding-bottom: 148px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const TextBox = styled.div`
  margin-bottom: 104px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 67px;
    display: flex;
    align-items: start;
  }
`;

export const TitleBox = styled.div`
  width: 290px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 515px;
    width: 100%;
  }
`;

export const List = styled.ul`
  margin-bottom: 14px;
  display: flex;
  gap: 35px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`;

export const Item = styled.li`
  min-width: 290px;

  @media screen and (min-width: 1440px) {
    display: flex;
    min-width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: -0.4px;
  line-height: 1;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
    font-size: 85px;
    width: 600px;
    margin-right: 20px;
  }
`;

export const Description = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  letter-spacing: -0.2px;
  font-size: 18px;
  color: ${globalColors.white};
  width: 240px;
  line-height: 1.4;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    width: 270px;
    line-height: 1.4;
  }
`;

export const Line = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-top: 55px;
    margin-left: auto;
    margin-right: 24px;
    min-width: 260px;
    height: 2px;
    background-color: ${globalColors.white};
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 50%;
  width: 184px;
  height: 184px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 1.3;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 1440px) {
    width: 275px;
    height: 275px;
    font-size: 22px;
    letter-spacing: -0.4px;
  }
`;

export const SliderDots = styled.div`
  display: flex;
  gap: 9px;
  justify-content: left;
  text-align: center;
`;

export const DesktopSliderDots = styled(SliderDots)`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const MobileSliderDots = styled(SliderDots)`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Dot = styled.div`
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${globalColors.white};
  cursor: pointer;

  &.active {
    background-color: ${globalColors.white};
  }
`;
