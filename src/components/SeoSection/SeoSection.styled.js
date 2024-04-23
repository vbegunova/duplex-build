import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 31px;
  padding-bottom: 53px;
  background-color: #131313;
  text-align: center;

  @media screen and (min-width: 1440px) {
    padding-top: 121px;
    padding-bottom: 100px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 52px;
  line-height: 1.2;
  margin-bottom: 10px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 98px;
    margin-bottom: 22px;
  }
`;

export const Text = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  font-size: 13px;
  margin-bottom: 20px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    line-height: 1.5;
    font-size: 20px;
    margin-bottom: 47px;
  }
`;

export const MoreBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 140px;
  height: 44px;
  border: none;
  background-color: ${globalColors.white};
  color: #181d24;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    width: 174px;
    height: 54px;
    font-size: 20px;
  }
`;
