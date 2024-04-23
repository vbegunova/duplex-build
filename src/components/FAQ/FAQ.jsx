import {
  AnswerText,
  Container,
  IconToggle,
  Item,
  ItemAnswer,
  ItemContainer,
  ItemTitle,
  Line,
  List,
  Section,
  Title,
  ToggleButton,
} from './FAQ.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

const faqData = [
  {
    index: 1,
    question: 'Які терміни будівництва у вашої компанії?',
    answer:
      'Терміни будівництва залежать від конкретного проєкту. Зазвичай ми намагаємося завершити будівництво в обумовлені терміни, проте деякі фактори, такі як погодні умови або затримки з постачанням матеріалів, можуть впливати на графік.',
  },
  {
    index: 2,
    question: 'Яка гарантія на будинки?',
    answer:
      'Терміни будівництва залежать від конкретного проєкту. Зазвичай ми намагаємося завершити будівництво в обумовлені терміни, проте деякі фактори, такі як погодні умови або затримки з постачанням матеріалів, можуть впливати на графік.',
  },
  {
    index: 3,
    question:
      'Чи можна здійснити індивідуалізовані зміни у плануванні будинку?',
    answer:
      'Терміни будівництва залежать від конкретного проєкту. Зазвичай ми намагаємося завершити будівництво в обумовлені терміни, проте деякі фактори, такі як погодні умови або затримки з постачанням матеріалів, можуть впливати на графік.',
  },
  {
    index: 4,
    question:
      'Чи є можливість отримати іпотечний кредит для придбання житла у вашої компанії?',
    answer:
      'Терміни будівництва залежать від конкретного проєкту. Зазвичай ми намагаємося завершити будівництво в обумовлені терміни, проте деякі фактори, такі як погодні умови або затримки з постачанням матеріалів, можуть впливати на графік.',
  },
];

const FAQ = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleToggle = index => {
    setActiveIndices(prevIndices => {
      const indexExists = prevIndices.includes(index);
      if (indexExists) {
        return prevIndices.filter(i => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <Section>
      <Container>
        <Title>FAQ</Title>
        <List>
          {faqData.map(item => {
            return (
              <Item
                key={item.index}
                className={activeIndices.includes(item.index) ? 'active' : ''}
              >
                <ItemContainer>
                  <ItemTitle>{item.question}</ItemTitle>
                  <ToggleButton onClick={() => handleToggle(item.index)}>
                    <IconToggle>
                      <use href={`${sprite}#icon-faq-arrow`}></use>
                    </IconToggle>
                  </ToggleButton>
                </ItemContainer>
                <Line />
                <ItemAnswer>
                  <AnswerText>{item.answer}</AnswerText>
                </ItemAnswer>
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

export default FAQ;
