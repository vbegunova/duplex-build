import axios from 'axios';
import {
  Button,
  Container,
  Description,
  FormInput,
  Section,
  Title,
  Form,
} from './ContactForm.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

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
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      setName('');
      setPhone('');

      navigate('/thanks');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section>
      <Container>
        <Title>Lorem ipsum dolor sit consectetur adipiscing elit</Title>
        <Description>
          Поділіться з нами своїм номером телефону, щоб ми могли залишатися на
          зв’язку
        </Description>
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
      </Container>
    </Section>
  );
};

export default ContactForm;
