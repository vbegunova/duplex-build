import { NavLink } from 'react-router-dom';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Item = styled.li``;

export const ImageThumb = styled(NavLink)`
  position: relative;
  overflow: hidden;
  display: block;
  margin-bottom: 25px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const Image = styled.img`
  width: 303px;
  height: 335px;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    width: 377px;
    height: 417px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 23, 25, 0.5);
  backdrop-filter: blur(5px);

  opacity: 0;
  transition: transform 250ms ease, opacity 250ms ease;

  ${Item}:hover & {
    opacity: 1;
  }
`;

export const Button = styled.div`
  border: 1px solid ${globalColors.white};
  background-color: transparent;
  width: 232px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  color: ${globalColors.white};
  font-size: 19px;
`;

export const AreaName = styled.p`
  margin-bottom: 6px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  color: ${globalColors.white};
  font-size: 21px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 7px;
    font-size: 27px;
  }
`;

export const FirstLine = styled.div`
  padding-top: 13px;
  padding-bottom: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${globalColors.white};
  font-family: 'VisueltPro', sans-serif;
  font-weight: 600;
  font-size: 14px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const SecondLine = styled(FirstLine)`
  margin-bottom: 4px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 13px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #2e2e2e;
`;

export const PriceBox = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${globalColors.white};
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.4px;
  color: #181d24;

  @media screen and (min-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 54px;
    font-size: 20px;
  }
`;

export const Price = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.4px;
  color: #181d24;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
