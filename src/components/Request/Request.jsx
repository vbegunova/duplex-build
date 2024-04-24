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

const Request = () => {
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
          <Form>
            <FormInput type="text" placeholder="Ваше ім'я" />
            <FormInput type="text" placeholder="Ваш телефон" />
            <Button to="/thanks">Звернутися</Button>
          </Form>
        </FormBox>
      </Container>
    </Section>
  );
};

export default Request;
