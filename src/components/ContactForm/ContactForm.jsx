import {
  Button,
  Container,
  Description,
  FormInput,
  Section,
  Title,
  Form,
} from './ContactForm.styled';

const ContactForm = () => {
  return (
    <Section>
      <Container>
        <Title>Lorem ipsum dolor sit consectetur adipiscing elit</Title>
        <Description>
          Поділіться з нами своїм номером телефону, щоб ми могли залишатися на
          зв’язку
        </Description>
        <Form>
          <FormInput type="text" placeholder="Ваше ім'я" />
          <FormInput type="text" placeholder="Ваш телефон" />
          <Button type="submit">Звернутися</Button>
        </Form>
      </Container>
    </Section>
  );
};

export default ContactForm;
