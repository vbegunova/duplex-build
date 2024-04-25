import { useEffect, useRef, useState } from 'react';
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Modal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const modalRef = useRef(null);
  const modalRefCopy = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const serviceId = 'service_qypc5sh';
    const templateId = 'template_bgsgfee';
    const publicKey = '1sdIx5miJQTb22Siy';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_phone: phone,
      },
    };

    try {
      await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        data
      );
      setName('');
      setPhone('');

      navigate('/thanks');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    modalRefCopy.current = modalRef.current;

    disableBodyScroll(modalRefCopy.current);

    return () => {
      enableBodyScroll(modalRefCopy.current);
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Backdrop>
      <ModalContainer ref={modalRef}>
        <CrossButton onClick={onClose}>
          <IconCross>
            <use href={`${sprite}#icon-cross`}></use>
          </IconCross>
        </CrossButton>
        <Title>Заповніть заявку</Title>
        <Text>Та ми зв’яжемось з вами протягом доби</Text>
        <Form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Ваше ім’я"
          />
          <FormInput
            type="number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Ваш телефон"
          />
          <Button type="submit">Звернутися</Button>
        </Form>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
