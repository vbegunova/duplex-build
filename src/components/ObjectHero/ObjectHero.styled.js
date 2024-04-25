import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 132px;
  padding-bottom: 65px;
  background-color: #131313;

  @media screen and (min-width: 1440px) {
    padding-top: 166px;
    padding-bottom: 53px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  padding-left: 28px;
  padding-right: 28px;

  @media screen and (min-width: 1440px) {
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const Title = styled.h1`
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 25px;
  color: ${globalColors.white};
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    font-size: 52px;
    margin-bottom: 46px;
  }
`;

export const Boxes = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 363px;
  margin-bottom: 13px;

  @media screen and (min-width: 1440px) {
    width: 764px;
    height: 582px;
    margin-bottom: 22px;
  }
`;

export const ButtonsBox = styled.div`
  margin-bottom: 13px;
  display: flex;
  align-items: center;
  gap: 9px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 34px;
    gap: 12px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: -0.4px;
  background-color: transparent;
  border: 1px solid ${globalColors.white};
  color: ${globalColors.white};

  &.active {
    background-color: ${globalColors.white};
    color: #181d24;
  }

  @media screen and (min-width: 1440px) {
    width: 204px;
    height: 67px;
    font-size: 26px;
  }
`;

export const List = styled.ul`
  margin-bottom: 27px;
  padding: 17px 9px 19px 15px;
  display: flex;
  flex-wrap: wrap;
  background-color: #232323;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 31px;
    width: 761px;
    height: 108px;
    align-items: center;
    justify-content: space-between;
    padding: 27px 29px 19px 24px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 1440px) {
    gap: 9px;
  }
`;

export const Number = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 3px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 29px;
    margin-top: 3px;
    /* margin-bottom: 6px; */
    margin-bottom: 0;
    line-height: 1;
  }
`;

export const Text = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: ${globalColors.white};
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const IconBox = styled.div`
  border-radius: 3px;
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);

  @media screen and (min-width: 1440px) {
    width: 51px;
    height: 51px;
  }
`;

export const InfoIcon = styled.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 1440px) {
    width: 30px;
    height: 30px;
  }
`;

export const InfoIconFill = styled(InfoIcon)`
  fill: ${globalColors.white};
`;

export const InfoIconStroke = styled(InfoIcon)`
  stroke: ${globalColors.white};
  fill: transparent;
`;

export const Description = styled.p`
  margin-bottom: 35px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  line-height: 1.3;
  font-size: 13px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    width: 741px;
    margin-bottom: 0;
    line-height: 1.3;
    font-size: 16px;
  }
`;

export const PlanBox = styled.div`
  margin-bottom: 35px;
  width: 100%;
  height: 300px;
  background-color: #c4c4c4;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 765px;
    height: 384px;
  }
`;

export const Square = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  background-color: ${globalColors.white};
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #181d24;
  letter-spacing: -0.4px;
  padding-left: 14px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    margin-bottom: 13px;
    width: 411px;
    height: 54px;
    font-size: 20px;
    padding-left: 19px;
    padding-right: 22px;
  }
`;

export const SquareInfo = styled.p`
  font-weight: 600;
`;

export const InfoList = styled.ul`
  margin-bottom: 19px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 26px;
  }
`;

export const InfoItem = styled.li`
  padding-top: 9px;
  padding-bottom: 12px;
  color: ${globalColors.white};
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    padding-top: 13px;
    padding-bottom: 17px;
    font-size: 18px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #2e2e2e;
`;

export const PriceBox = styled.div`
  margin-bottom: 20px;
  margin-top: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${globalColors.white};
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: -0.4px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 26px;
    margin-top: 46px;
    font-size: 34px;
  }
`;

export const PriceText = styled.p`
  font-weight: 700;
`;

const RightBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 301px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: -0.4px;
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;

  @media screen and (min-width: 1440px) {
    width: 408px;
    height: 89px;
    font-size: 24px;
  }
`;

export const ButtonRecord = styled(RightBtn)`
  margin-bottom: 10px;
  color: #181d24;
  background-color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    margin-bottom: 14px;
  }
`;

export const ButtonCheck = styled(RightBtn)`
  color: ${globalColors.white};
  border: 1px solid ${globalColors.white};
`;
