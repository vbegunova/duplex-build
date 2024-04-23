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