import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 53px;
  padding-bottom: 37px;
  background-color: #1f1f1f;

  @media screen and (min-width: 1440px) {
    padding-top: 59px;
    padding-bottom: 89px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 52px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 72px;
    line-height: 1.9;
    margin-bottom: 21px;
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
