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

  useEffect(() => {
    // Запретить прокрутку тела при открытии мобильного меню
    disableBodyScroll(mobileMenuRef.current);

    // Функция для проверки ширины окна и закрытия меню
    const handleResize = () => {
      if (window.innerWidth > 1440) {
        onClose(); // Вызываем функцию закрытия меню
      }
    };

    // Слушаем изменение размера окна
    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      enableBodyScroll(mobileMenuRef.current);
      clearAllBodyScrollLocks();
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]); // Зависимость от onClose для обновления, если props изменится

  return (
    <MenuBox ref={mobileMenuRef}>
      <Container>
        <TopContainer>
          <NavLink to="/">
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
