import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 86px;
  padding-bottom: 88px;

  @media screen and (min-width: 1440px) {
    padding-top: 48px;
    padding-bottom: 45px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  padding-left: 26px;
  padding-right: 26px;

  @media screen and (min-width: 1440px) {
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: -0.6px;
  color: #484b4f;
  text-align: center;
  margin-bottom: 14px;

  @media screen and (min-width: 1440px) {
    font-size: 76px;
    margin-bottom: 38px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

export const Item = styled.li`
  position: relative;
`;

export const ItemContainer = styled.div`
  padding-top: 18px;
  padding-bottom: 20px;
  padding-right: 24px;
  padding-left: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1c1c1c;

  @media screen and (min-width: 1440px) {
    height: 109px;
    padding-right: 33px;
    padding-left: 57px;
  }
`;

export const ItemTitle = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  color: #fff;
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: -0.7px;
  width: 200px;

  @media screen and (min-width: 1440px) {
    width: 100%;
    font-size: 25px;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  transition: transform 0.3s ease;

  @media screen and (min-width: 1440px) {
    margin-bottom: 4px;
  }

  ${Item}.active & {
    transform: scale(-1, -1);
  }
`;

export const IconToggle = styled.svg`
  width: 21px;
  height: 18px;

  @media screen and (min-width: 1440px) {
    width: 26px;
    height: 24px;
  }
`;

export const ItemAnswer = styled.div`
  opacity: 0;
  transform: translateY(-100%);
  background-color: #1c1c1c;
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease, padding 300ms ease, opacity 300ms ease,
    transform 300ms ease;

  ${Item}.active & {
    padding: 11px 21px 27px;
    opacity: 1;
    transform: translateY(0);
    max-height: 300px;
  }

  @media screen and (min-width: 1440px) {
    ${Item}.active & {
      padding: 35px 57px 47px;
      opacity: 1;
      transform: translateY(0);
      max-height: 300px;
    }
  }
`;

export const AnswerText = styled.p`
  color: ${globalColors.white};
  font-size: 12px;
  line-height: 1.4;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    width: 1106px;
  }
`;

export const Line = styled.div`
  ${Item}.active & {
    position: absolute;
    top: 70px;
    left: 28px;
    height: 1px;
    width: 257px;
    background-color: rgba(255, 255, 255, 0.17);
  }

  @media screen and (min-width: 1440px) {
    ${Item}.active & {
      top: 100px;
      right: 0;
      margin-bottom: -10px;
      width: 1160px;
      margin-left: auto;
    }
  }
`;
