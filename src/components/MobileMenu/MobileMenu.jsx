import { NavLink } from 'react-router-dom';
import {
  Container,
  LogoImage,
  MenuBox,
  TopContainer,
  MobileMenuBtn,
  MobileMenuIcon,
  Title,
  Navigation,
  List,
  StyledLink,
} from './MobileMenu.styled';
import logo from '../../images/logo.png';
import sprite from '../../images/sprite.svg';

const MobileMenu = () => {
  return (
    <MenuBox>
      <Container>
        <TopContainer>
          <NavLink to="/">
            <LogoImage src={logo} alt="logo" />
          </NavLink>
          <MobileMenuBtn
          // aria-expanded="false"
          // aria-controls="mobile-menu"
          >
            <MobileMenuIcon>
              <use href={`${sprite}#icon-cross`}></use>
            </MobileMenuIcon>
          </MobileMenuBtn>
        </TopContainer>
        <Title>Меню</Title>
        <List>
          <li>
            <StyledLink to="/about-company">Про компанію</StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog">Каталог</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">Блог</StyledLink>
          </li>
          <li>
            <StyledLink to="/contacts">Контакти</StyledLink>
          </li>
        </List>
        <Contacts>
            <SocMediaList>
              <li>
                <SocMediaLink href="#">
                  <SocMediaIcon>
                    <use href={`${sprite}#icon-instagram`}></use>
                  </SocMediaIcon>
                </SocMediaLink>
              </li>
              <li>
                <SocMediaLink href="#">
                  <SocMediaIcon>
                    <use href={`${sprite}#icon-facebook`}></use>
                  </SocMediaIcon>
                </SocMediaLink>
              </li>
              <li>
                <SocMediaLink href="#">
                  <SocMediaTelegram>
                    <use href={`${sprite}#icon-telegram`}></use>
                  </SocMediaTelegram>
                </SocMediaLink>
              </li>
            </SocMediaList>
            <PhoneLink href="#">+38 98 000 0000</PhoneLink>
          </Contacts>
      </Container>
    </MenuBox>
  );
};

export default MobileMenu;
