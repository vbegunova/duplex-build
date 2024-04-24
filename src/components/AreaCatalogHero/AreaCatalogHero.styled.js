import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 145px;
  padding-bottom: 50px;
  background-color: #131313;

  @media screen and (min-width: 1440px) {
    padding-top: 216px;
    padding-bottom: 80px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h1`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 49px;
  margin-bottom: 30px;
  letter-spacing: -0.4px;
  line-height: 1.2;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 124px;
    margin-bottom: 71px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 42px;
    row-gap: 70px;
  }
`;
