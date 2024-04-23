import { useState } from 'react';
import {
  Section,
  Container,
  Title,
  TextBox,
  TitleBox,
  List,
  Item,
  Description,
  Line,
  Button,
  SliderDots,
  Dot,
} from './HomeHero.styled';
import { useRef } from 'react';
import { useEffect } from 'react';

const titles = [
  {
    index: 1,
    title: `Дуплекси <br/> в Києві та області`,
    description: 'Купуйте простір та комфорт за ціною квартири!',
  },
  {
    index: 2,
    title: 'Дуплекси до $100,000',
    description: 'Ідеальний вибір для сучасного життя!',
  },
  {
    index: 3,
    title: 'Дуплекси до $100,000 у Києві та області',
    description: 'Ваш простір та комфорт',
  },
  {
    index: 4,
    title: 'Обирайте просторе житло',
    description: 'Обирайте дуплекси від "Лінії Будівництва"!',
  },
];

const HomeHero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titleBoxRef = useRef(null);

  useEffect(() => {
    const changeTitle = index => {
      const titleSlideWidth = titleBoxRef.current.children[0].offsetWidth;
      titleBoxRef.current.style.transition = 'transform 0.4s ease-in-out';
      titleBoxRef.current.style.transform = `translateX(-${
        index * (titleSlideWidth + 35)
      }px)`;
    };

    changeTitle(currentTitle);
  }, [currentTitle]);

  useEffect(() => {
    const interval =
      window.innerWidth < 1440
        ? setInterval(() => {
            setCurrentTitle(prevTitle => (prevTitle + 1) % titles.length);
          }, 5000)
        : null;

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <TextBox>
          <TitleBox>
            <List ref={titleBoxRef}>
              {titles.map(title => {
                return (
                  <Item key={title.index}>
                    <Title dangerouslySetInnerHTML={{ __html: title.title }} />
                    <Description>{title.description}</Description>
                  </Item>
                );
              })}
            </List>
            <SliderDots>
              {titles.map((_, index) => (
                <Dot
                  key={index}
                  className={`${currentTitle === index ? 'active' : ''}`}
                  onClick={() => setCurrentTitle(index)}
                ></Dot>
              ))}
            </SliderDots>
          </TitleBox>
          <Line />
        </TextBox>
        <Button>
          Отримати
          <br />
          пропозицію
        </Button>
      </Container>
    </Section>
  );
};

export default HomeHero;
