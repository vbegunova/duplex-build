import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Container = styled.div`
  ${ContainerStyled}
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 38px;

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Number = styled.p`
  margin-bottom: 15px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: -0.4px;
  line-height: 0.78;
  color: ${globalColors.darkTitle};

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    font-size: 92px;
  }
`;

export const Description = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 300;
  font-size: 10px;
  color:  ${globalColors.darkSubtitle};

  @media screen and (min-width: 1440px) {
    font-size: 19px;
  }
`;
