import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 43px;
  background-color: #f4f4f4;

  @media screen and (min-width: 1440px) {
    padding-top: 85px;
    padding-bottom: 75px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

