import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 406px;
  padding-bottom: 70px;
  background-image: url(${props => props.theme.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1440px) {
    padding-top: 490px;
    padding-bottom: 120px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h1`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 27px;
  color: ${globalColors.white};
  line-height: 1.4;
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    font-size: 69px;
    line-height: 1.2;
  }
`;

export const TextContainer = styled.section`
  background-color: #131313;
  padding-top: 37px;
  padding-bottom: 36px;

  @media screen and (min-width: 1440px) {
    padding-top: 72px;
    padding-bottom: 62px;
  }
`;

export const Text = styled.p`
  margin-bottom: 35px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const PublicDate = styled.p`
  margin-bottom: 9px;
  color: ${globalColors.white};
  font-size: 23px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 13px;
    font-size: 32px;
  }
`;

export const Date = styled.p`
  font-size: 13px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
