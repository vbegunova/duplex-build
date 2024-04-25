import { NavLink } from 'react-router-dom';
import {
  Container,
  LogoImage,
  MenuBox,
  TopContainer,
  MobileMenuBtn,
  MobileMenuIcon,
  Title,
  List,
  StyledLink,
  Contacts,
  SocMediaList,
  SocMediaLink,
  SocMediaIcon,
  SocMediaTelegram,
  PhoneLink,
} from './MobileMenu.styled';
import logo from '../../images/logo.png';
import sprite from '../../images/sprite.svg';
import { useEffect, useRef } from 'react';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

const MobileMenu = ({ onClose }) => {
  const mobileMenuRef = useRef(null);
  const mobileMenuRefCopy = useRef(null);

  useEffect(() => {
    mobileMenuRefCopy.current = mobileMenuRef.current;
    disableBodyScroll(mobileMenuRefCopy.current);

    const handleResize = () => {
      if (window.innerWidth > 1440) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      enableBodyScroll(mobileMenuRefCopy.current);
      clearAllBodyScrollLocks();
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  return (
    <MenuBox ref={mobileMenuRef}>
      <Container>
        <TopContainer>
          <NavLink to="/" onClick={onClose}>
            <LogoImage src={logo} alt="logo" />
          </NavLink>
          <MobileMenuBtn onClick={onClose}>
            <MobileMenuIcon>
              <use href={`${sprite}#icon-cross`}></use>
            </MobileMenuIcon>
          </MobileMenuBtn>
        </TopContainer>
        <Title>Меню</Title>
        <List>
          <li>
            <StyledLink to="/about-company" onClick={onClose}>
              Про компанію
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog" onClick={onClose}>
              Каталог
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/blog" onClick={onClose}>
              Блог
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/contacts" onClick={onClose}>
              Контакти
            </StyledLink>
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
