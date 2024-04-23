import { ContainerStyled } from 'Styled/ContainerStyled';
import { globalColors } from 'Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 41px;
  padding-bottom: 42px;

  @media screen and (min-width: 1440px) {
    padding-top: 72px;
    padding-bottom: 90px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const TextBox = styled.div`
  margin-bottom: 41px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 57px;
    display: flex;
  }
`;

export const TitleBox = styled.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`;

export const Title = styled.h2`
  margin-bottom: 18px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 34px;
  letter-spacing: -0.1px;
  line-height: 1.2;
  color: ${globalColors.darkTitle};

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 60px;
    font-size: 68px;
    letter-spacing: -0.1px;
    line-height: 1.2;
    width: 600px;
  }
`;

export const Description = styled.p`
  margin-bottom: 20px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 14px;
  width: 253px;
  color: ${globalColors.darkText};
  line-height: 1.2;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    right: 85px;
    font-size: 21px;
    width: 350px;
    line-height: 1.3;
  }
`;

export const Text = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: ${globalColors.darkText};
  line-height: 1.2;

  @media screen and (min-width: 1440px) {
    margin-top: auto;
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const FirstText = styled(Text)`
  width: 273px;
  margin-bottom: 19px;

  @media screen and (min-width: 1440px) {
    margin-right: 45px;
    margin-bottom: 0;
    width: 232px;
  }
`;

export const SecondText = styled(Text)`
  width: 280px;

  @media screen and (min-width: 1440px) {
    width: 266px;
  }
`;

export const ImagesBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 360px;
  overflow-x: auto;
  margin-bottom: 42px;
  display: flex;
  gap: 12px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 1220px;
    margin-bottom: 80px;
    gap: 26px;
  }
`;

export const FirstImage = styled.img`
  width: 277px;

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const SecondImage = styled.img`
  width: 281px;

  @media screen and (min-width: 1440px) {
    width: 602px;
  }
`;