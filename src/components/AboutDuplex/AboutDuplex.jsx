import {
  Container,
  SecondDescription,
  Section,
  SubscriptionBox,
  Subtitle,
  TextBox,
  TextBoxDescription,
  Title,
  RoundElem,
  ImageDesktop,
  ImageMobile
} from './AboutDuplex.styled';
import roundElem from '../../images/home/round-elem.png';
import imgDesktop from '../../images/home/about-duplex-img-desktop.png';
import imgMobile from '../../images/home/about-duplex-img-mobile.png';

const AboutDuplex = () => {
  return (
    <Section>
      <Container>
        <TextBox>
          <Title>Про дуплекси</Title>
          <TextBoxDescription>
            Дуплекси — це винятковий вид житлових об'єктів, які здобувають все
            більшу популярність серед тих, хто шукає комбінацію стилю, простору
            та функціональності у своєму майбутньому домі. Ці особливі будівлі
            складаються з двох повністю окремих одиниць, кожна з яких має свої
            власні входи, приватний двір та навіть можливість розділити
            комунікації, надаючи власникам максимальний рівень приватності.
          </TextBoxDescription>
        </TextBox>
        <SubscriptionBox>
          <Subtitle>Що робить дуплекси такими привабливими?</Subtitle>
          <SecondDescription>
            Дуплекси — це ідеальне рішення для тих, хто цінує приватність і
            доступність. По-перше, дуплекси забезпечують власникам відчуття
            особистого простору, оскільки кожен блок має свій власний вхід та
            приватний двір. По-друге, дуплекси від "Лінії Будівництва" доступні
            за ціною квартири. Це означає, що ви можете придбати просторе та
            функціональне житло за ціною, яка приємно здивує. Власний дуплекс —
            це не лише мрія, але і доступна реальність, яку ви можете здійснити
            разом з нами.
          </SecondDescription>
          <RoundElem src={roundElem}/>
          <ImageDesktop src={imgDesktop}/>
          <ImageMobile src={imgMobile}/>
        </SubscriptionBox>
      </Container>
    </Section>
  );
};

export default AboutDuplex;
