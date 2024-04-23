import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #131313;
  padding-top: 144px;
  padding-bottom: 66px;

  @media screen and (min-width: 1440px) {
    padding-top: 209px;
    padding-bottom: 113px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 25px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 74px;
    flex-direction: row;
    gap: 116px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftBox = styled(RightBox)`
  margin-bottom: 36px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-top: auto;
  }
`;

export const Title = styled.h1`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 52px;
  line-height: 1.1;
  letter-spacing: -0.4px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
    font-size: 124px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: -0.1px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 31px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: ${globalColors.white};
  line-height: 1.4;

  @media screen and (min-width: 1440px) {
    width: 350px;
    margin-bottom: 21px;
    font-size: 20px;
    text-align: right;
  }
`;

export const ContactButton = styled.button`
  width: 208px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${globalColors.white};
  color: ${globalColors.white};
  font-family: 'Shtolzl', sans-serif;
  font-weight: 400;
  font-size: 17px;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    margin-left: auto;
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
