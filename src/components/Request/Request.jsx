import { useState } from 'react';
import {
  Button,
  Container,
  Description,
  Form,
  FormBox,
  FormInput,
  Section,
  Title,
} from './Request.styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Request = () => {
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

  return (
    <Section>
      <Container>
        <div>
          <Title>
            Не чекайте, дізнайтеся всі переваги вашого майбутнього житла прямо
            зараз!
          </Title>
          <Description>
            Запишіться на безкоштовний огляд будинку від "Лінії Будівництва" і
            переконайтеся в його якості та комфорті особисто
          </Description>
        </div>
        <FormBox>
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
        </FormBox>
      </Container>
    </Section>
  );
};

export default Request;
