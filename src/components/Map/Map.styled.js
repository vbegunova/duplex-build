import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';
import desktopMap from '../../images/map/map-desktop.jpg';
import mobileMap from '../../images/map/map-mobile.jpg';

export const Section = styled.section`
  background-color: #131313;
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const MapBox = styled.div`
  width: 100%;
  height: 491px;
  background-image: url(${mobileMap});

  @media screen and (min-width: 1440px) {
    height: 685px;
    background-image: url(${desktopMap});
  }
`;
