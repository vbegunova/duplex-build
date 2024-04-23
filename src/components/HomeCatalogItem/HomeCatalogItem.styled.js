import { globalColors } from '../../Styled/GlobalColors';
import { NavLink } from 'react-router-dom';
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
  width: 290px;
  height: 320px;

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

export const ItemTitle = styled.p`
  margin-bottom: 10px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  color: ${globalColors.white};
  font-size: 21px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 14px;
    font-size: 27px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceBox = styled.div`
  margin-right: 12px;
  width: 124px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    width: 162px;
    height: 55px;
  }
`;

export const Price = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.4px;
  color: #181d24;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const Square = styled.p`
  font-family: 'VisueltPro', sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.4px;
  color: ${globalColors.white};

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
