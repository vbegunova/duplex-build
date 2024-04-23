import {
  Container,
  Description,
  Item,
  ItemTitle,
  List,
  Number,
  Section,
  TextBox,
  Title,
} from './Advantages.styled';

const Advantages = ({ list }) => {
  return (
    <Section>
      <Container>
        <Title>Наші переваги</Title>
        <List>
          {list.map((item, index) => {
            return (
              <Item key={index}>
                <Number>0{index + 1}</Number>
                <TextBox>
                  <ItemTitle>{item.title}</ItemTitle>
                  <Description>{item.description}</Description>
                </TextBox>
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

export default Advantages;

{
  /* <Item>
            <Number>01</Number>
            <TextBox>
              <ItemTitle>Якість будівництва</ItemTitle>
              <Description>
                Наша компанія має бездоганну репутацію у сфері будівництва
                завдяки використанню найсучасніших технологій та високоякісних
                будівельних матеріалів.
              </Description>
            </TextBox>
          </Item>
          <Item>
            <Number>02</Number>
            <TextBox>
              <ItemTitle>Різноманітність об'єктів</ItemTitle>
              <Description>
                Ми пропонуємо широкий вибір житлових комплексів, котеджних
                містечок та дуплексів, які відповідають різним потребам та
                бюджетам наших клієнтів.
              </Description>
            </TextBox>
          </Item>
          <Item>
            <Number>03</Number>
            <TextBox>
              <ItemTitle>Доступні ціни</ItemTitle>
              <Description>
                Наша компанія дбає про доступність своїх об'єктів, пропонуючи
                конкурентоспроможні ціни та спеціальні умови придбання.
              </Description>
            </TextBox>
          </Item>
          <Item>
            <Number>04</Number>
            <TextBox>
              <ItemTitle>Комфорт та безпека</ItemTitle>
              <Description>
                Наші будинки розроблені з урахуванням потреб майбутніх
                мешканців, забезпечуючи комфортне та безпечне життя в них.
              </Description>
            </TextBox>
          </Item>
          <Item>
            <Number>05</Number>
            <TextBox>
              <ItemTitle>Індивідуальний підхід</ItemTitle>
              <Description>
                Ми працюємо з кожним клієнтом індивідуально, враховуючи їхні
                побажання та потреби, щоб забезпечити найкращі умови для покупки
                житла.
              </Description>
            </TextBox>
          </Item>
          <Item>
            <Number>06</Number>
            <TextBox>
              <ItemTitle>Підтримка та сервіс</ItemTitle>
              <Description>
                Після придбання будинку наша компанія забезпечує надійну
                підтримку та сервіс, гарантуючи задоволення від покупки та
                спокій наших клієнтів.
              </Description>
            </TextBox>
          </Item> */
}
