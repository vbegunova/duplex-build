import styled from 'styled-components';
import mobileBg from '../../images/home/contact-us-mobile.jpg';
import desktopBg from '../../images/home/contact-us-background-desktop.png';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  background-color: #101010;
  background-image: url(${mobileBg});
  background-position: bottom;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 464px;

  @media screen and (min-width: 1440px) {
    background-image: url(${desktopBg});
    background-position: right bottom;
    padding-top: 108px;
    padding-bottom: 108px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h1`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.4;
  letter-spacing: -0.1px;
  color: ${globalColors.white};
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 68px;
    line-height: 1.1;
    width: 618px;
    margin-bottom: 14px;
  }
`;

export const Description = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${globalColors.white};
  line-height: 1.4;
  margin-bottom: 23px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    width: 500px;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11px;

  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const FormInput = styled.input`
  padding: 18px 32px;
  width: 284px;
  height: 61px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-family: 'Stolzl Book', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 1440px) {
    padding: 25px 32px;
    width: 403px;
    height: 86px;
    font-size: 21px;
  }

  &::placeholder {
    font-family: 'Stolzl Book', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 1440px) {
    &::placeholder {
      font-size: 21px;
    }
  }
`;

export const Button = styled(NavLink)`
  width: 284px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.white};
  border: none;
  color: #171d22;
  font-family: 'Stolzl', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    width: 403px;
    height: 106px;
    font-size: 24px;
  }
`;
