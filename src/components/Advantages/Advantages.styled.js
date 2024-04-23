import styled from 'styled-components';
import background from '../../images/home/advantages-background-desktop.jpg';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';

export const Section = styled.section`
  padding-top: 54px;
  padding-bottom: 69px;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1440px) {
    padding-top: 127px;
    padding-bottom: 154px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  margin-bottom: 26px;
  font-size: 42px;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    position: sticky;
    top: 40px;
    font-size: 108px;
    width: 550px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media screen and (min-width: 1440px) {
    gap: 30px;
    margin-top: -240px;
    margin-left: 55%;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 21px;

  @media screen and (min-width: 1440px) {
    gap: 34px;
  }
`;

export const Number = styled.p`
  font-family: 'WonderGardenScript';
  font-size: 154px;
  letter-spacing: -0.4px;
  line-height: 0.4;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 318px;
  }
`;

export const TextBox = styled.div`
  margin-bottom: 21px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 21px;
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 7px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.1px;
  line-height: 1.2;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    margin-bottom: 7px;
    font-size: 29px;
  }
`;

export const Description = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: ${globalColors.white};
  line-height: 1.4;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
