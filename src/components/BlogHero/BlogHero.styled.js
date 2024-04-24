import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 152px;
  padding-bottom: 40px;
  background-color: #131313;

  @media screen and (min-width: 1440px) {
    padding-top: 216px;
    padding-bottom: 67px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h1`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: -0.4px;
  margin-bottom: 43px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 124px;
    letter-spacing: -0.4px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 27px;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 1440px) {
    width: 599px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 208px;

  @media screen and (min-width: 1440px) {
    width: 599px;
    height: 416px;
  }
`;

export const InfoBox = styled.div`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  padding: 20px 19px 21px;
  background-color: #242424;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    padding: 39px 21px 33px 38px;
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 11px;
  font-size: 21px;
  letter-spacing: -0.4px;
  line-height: 1.1;

  @media screen and (min-width: 1440px) {
    margin-bottom: 18px;
    font-size: 30px;
    letter-spacing: -0.4px;
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  margin-bottom: 13px;
  font-size: 13px;
  line-height: 1.2;

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const StyledBtn = styled(Link)`
  width: 129px;
  height: 44px;
  border: none;
  background-color: ${globalColors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #181d24;
  font-size: 14px;
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    width: 258px;
    height: 88px;
    font-size: 28px;
  }
`;
