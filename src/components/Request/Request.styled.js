import styled from 'styled-components';
import background from '../../images/home/request-background-desktop.jpg';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';

export const Section = styled.section`
  padding-top: 43px;
  padding-bottom: 34px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1440px) {
    padding-top: 116px;
    padding-bottom: 116px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 67px;
  }
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 28px;
  color: ${globalColors.white};
  margin-bottom: 10px;
  letter-spacing: -0.3px;

  @media screen and (min-width: 1440px) {
    font-size: 54px;
    width: 627px;
    margin-bottom: 7px;
  }
`;

export const Description = styled.p`
  margin-bottom: 27px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  color: ${globalColors.white};
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 1.4;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    font-size: 21px;
    line-height: 1.7;
  }
`;

export const FormBox = styled.div`
  padding-top: 30px;
  padding-bottom: 28px;
  padding-left: 31px;
  padding-right: 43px;
  background-color: rgba(217, 217, 217, 0.09);

  @media screen and (min-width: 1440px) {
    width: 537px;
    padding-top: 54px;
    padding-bottom: 50px;
    padding-left: 56px;
    padding-right: 78px;
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
  padding: 15px 17px;
  width: 222px;
  height: 47px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-family: 'Stolzl Book', sans-serif;
  font-weight: 400;
  font-size: 12px;
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
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 1440px) {
    &::placeholder {
      font-size: 21px;
    }
  }
`;

export const Button = styled.button`
  width: 222px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  color: #171d22;
  font-family: 'Stolzl', sans-serif;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    width: 403px;
    height: 106px;
    font-size: 24px;
  }
`;
