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
  MobileMenuIcon,
  Footer,
  Info,
  Logo,
  InfoLink,
  Copyright,
  NavList,
  FooterStyledLink,
  ContactsSubtitle,
  Subtitle,
  FooterPhoneLink,
  SocMediaContactsSubtitle,
  FooterSocMediaItem,
  FooterContainer,
  RoundElem,
} from './SharedLayout.styled';
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.png';
import roundElem from '../../images/footer-round-elem.png';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavLink to="/">
            <LogoImage src={logo} alt="logo" />
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
            <PhoneLink href="#">+38 98 000 0000</PhoneLink>
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
      <Footer>
        <FooterContainer>
          <Info>
            <Logo to="/">
              <LogoImage src={logo} alt="logo" />
            </Logo>
            <InfoLink>Договір публічної оферти</InfoLink>
            <InfoLink>Політика конфіденційності</InfoLink>
            <Copyright>
              © 2024 Лінія Будівництва
              <br />
              Всі права захищені
            </Copyright>
          </Info>
          <div>
            <Subtitle>Навігація</Subtitle>
            <NavList>
              <FooterStyledLink to="/about-company">
                Про компанію
              </FooterStyledLink>
              <FooterStyledLink to="/catalog">Каталог</FooterStyledLink>
              <FooterStyledLink to="/blog">Блог</FooterStyledLink>
              <FooterStyledLink to="/contacts">Контакти</FooterStyledLink>
            </NavList>
          </div>
          <div>
            <Subtitle>Наші контакти</Subtitle>
            <ContactsSubtitle>Номер телефону</ContactsSubtitle>
            <FooterPhoneLink href="#">+380 98 000 0000</FooterPhoneLink>
            <SocMediaContactsSubtitle>
              Наші соціальні мережі
            </SocMediaContactsSubtitle>
            <SocMediaList>
              <li>
                <FooterSocMediaItem>
                  <SocMediaIcon>
                    <use href={`${sprite}#icon-instagram`}></use>
                  </SocMediaIcon>
                </FooterSocMediaItem>
              </li>
              <li>
                <FooterSocMediaItem>
                  <SocMediaIcon>
                    <use href={`${sprite}#icon-facebook`}></use>
                  </SocMediaIcon>
                </FooterSocMediaItem>
              </li>
              <li>
                <FooterSocMediaItem>
                  <SocMediaTelegram>
                    <use href={`${sprite}#icon-telegram`}></use>
                  </SocMediaTelegram>
                </FooterSocMediaItem>
              </li>
            </SocMediaList>
          </div>
          <RoundElem src={roundElem}/>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default SharedLayout;
