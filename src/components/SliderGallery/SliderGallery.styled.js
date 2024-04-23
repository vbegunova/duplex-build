import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 32px;
  padding-bottom: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 14px;
    padding-bottom: 20px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  padding-left: 18px;
  padding-right: 17px;

  @media screen and (min-width: 1440px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`;

export const SliderBox = styled.div`
  position: relative;
`;

export const SliderImages = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const Image = styled.img`
  width: 325px;
  height: 530px;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    width: 677px;
    height: 677px;
  }
`;

export const SliderControls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SliderBtn = styled.button`
  width: 116px;
  height: 68px;
  border: none;
  background-color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    width: 182px;
    height: 107px;
  }
`;

export const ArrowIcon = styled.svg`
  width: 36px;
  height: 10px;

  @media screen and (min-width: 1440px) {
    width: 56px;
    height: 20px;
  }
`;
