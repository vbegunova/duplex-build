import { useEffect, useRef } from 'react';
import {
  Backdrop,
  Button,
  CrossButton,
  Form,
  FormInput,
  ModalContainer,
  Text,
  Title,
  IconCross,
} from './Modal.styled';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import sprite from '../../images/sprite.svg';

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);
  const modalRefCopy = useRef(null);

  useEffect(() => {
    modalRefCopy.current = modalRef.current;

    disableBodyScroll(modalRefCopy.current);

    return () => {
      enableBodyScroll(modalRefCopy.current);
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer ref={modalRef}>
        <CrossButton onClick={onClose}>
          <IconCross>
            <use href={`${sprite}#icon-cross`}></use>
          </IconCross>
        </CrossButton>
        <Title>Заповніть заявку</Title>
        <Text>Та ми зв’яжемось з вами протягом доби</Text>
        <Form>
          <FormInput placeholder="Ваше ім’я" />
          <FormInput placeholder="Ваш телефон" />
          <Button to="/thanks">Звернутися</Button>
        </Form>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
