import {
  Section,
  Container,
  TextBox,
  TitleBox,
  Title,
  Description,
  FirstText,
  SecondText,
  ImagesBox,
  FirstImage,
  SecondImage,
} from './HomeAboutUs.styled';
import firstImage from '../../images/home/about-us-first.jpg';
import secondImage from '../../images/home/about-us-second.jpg';
import NumbersList from 'components/NumbersList';

const HomeAboutUs = () => {
  return (
    <Section>
      <Container>
        <TextBox>
          <TitleBox>
            <Title>Лінія будівництва - це визнаний Лідер</Title>
            <Description>
              У сфері будівництва та продажу житлових об'єктів у Києві та
              області.
            </Description>
          </TitleBox>
          <FirstText>
            Наша компанія славиться своїм бездоганним підходом до кожного
            проекту, де кожна деталь має значення. Ми спеціалізуємося на
            створенні вишуканих житлових комплексів, котеджних містечок та
            дуплексів, які вражають своєю архітектурою та функціональністю.
          </FirstText>
          <SecondText>
            Наша місія полягає в тому, щоб кожен клієнт відчував себе не лише
            власником житла, але й частиною великої спільноти, де комфорт,
            безпека та затишок - це не пусті слова, а реальність. Ми прагнемо не
            лише будувати об'єкти, але й створювати простір, де люди можуть
            розвиватися, спілкуватися та насолоджуватися життям.
          </SecondText>
        </TextBox>
      </Container>

      <ImagesBox>
        <FirstImage src={firstImage}></FirstImage>
        <SecondImage src={secondImage}></SecondImage>
      </ImagesBox>

      <NumbersList/>
    </Section>
  );
};

export default HomeAboutUs;
