import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #151719;
  padding-top: 56px;
  padding-bottom: 48px;

  @media screen and (min-width: 1440px) {
    padding-top: 102px;
    padding-bottom: 112px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 42px;
  text-align: center;
  color: ${globalColors.white};
  letter-spacing: -0.1px;
  margin-bottom: 21px;

  @media screen and (min-width: 1440px) {
    font-size: 68px;
    text-align: left;
    margin-bottom: 47px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
