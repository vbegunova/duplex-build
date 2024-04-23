import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 54px;

  @media screen and (min-width: 1440px) {
    padding-top: 93px;
    padding-bottom: 84px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    padding-right: 96px;
  }
`;

export const TopBox = styled.div`
  margin-bottom: 57px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BottomBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 70px;
  }
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: -0.1px;
  margin-bottom: 24px;
  color: ${globalColors.darkTitle};

  @media screen and (min-width: 1440px) {
    font-size: 68px;
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.3;
  color: ${globalColors.darkText};

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const TopFirstText = styled(Text)`
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 396px;
  }
`;

export const TopSecondText = styled(Text)`
  @media screen and (min-width: 1440px) {
    width: 434px;
  }
`;

export const BottomText = styled(Text)`
  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;

export const BottomFirstText = styled(BottomText)`
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 19px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  color: #484b4f;

  @media screen and (min-width: 1440px) {
    width: 470px;
    margin-bottom: 0;
    font-size: 39px;
  }
`;

export const GalleryBox = styled.div`
  margin-bottom: 41px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 76px;
  }
`;

export const Gallery = styled.div`
  width: 771px;
  display: flex;

  @media screen and (min-width: 1440px) {
    width: 1795px;
    margin-left: -140px;
  }
`;

export const Image = styled.img`
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  width: 266px;
  height: 218px;
  margin-left: -20px;

  @media screen and (min-width: 1440px) {
    width: 585px;
    height: 480px;
    margin-left: -40px;
  }
`;
