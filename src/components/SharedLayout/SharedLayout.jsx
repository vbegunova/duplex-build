import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  List,
  LogoImage,
  Navigation,
  StyledLink,
  Contacts,
  SocMediaList,
  SocMediaLink,
  SocMediaIcon,
  SocMediaTelegram,
  MobileMenuBtn,
  PhoneLink,
  MobileMenuIcon
} from './SharedLayout.styled';
import sprite from '../../images/sprite.svg'

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavLink to="/">
            <LogoImage src="./images/logo-desktop.png" alt="logo" />
          </NavLink>
          <Navigation>
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
          </Navigation>
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
            <PhoneLink href="#">
              +38 98 000 0000
            </PhoneLink>
          </Contacts>
          <MobileMenuBtn
            // aria-expanded="false"
            // aria-controls="mobile-menu"
          >
            <MobileMenuIcon>
              <use href={`${sprite}#icon-burger`}></use>
            </MobileMenuIcon>
          </MobileMenuBtn>
        </Container>
      </Header>
      <main>
        <Suspense>
          {/* fallback={<Loader />} */}
          <Outlet />
        </Suspense>
      </main>

    </>
  );
};

export default SharedLayout;
