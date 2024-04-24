import {
  Container,
  ImageDesktop,
  ImageMobile,
  Section,
  StyledLink,
  Text,
  Title,
} from './Thanks.styled';
import imgMobile from '../../images/thanks/thanks-img-mobile.jpg';
import imgDesktop from '../../images/thanks/thanks-img.jpg';

const Thanks = () => {
  return (
    <Section>
      <Container>
        <Title>Дякуємо!</Title>
        <Text>
          Протягом дня з Вами зв’яжеться менеджер та назначить дату огляду
        </Text>
        <StyledLink to="/">На головну</StyledLink>
        <ImageMobile src={imgMobile} />
        <ImageDesktop src={imgDesktop} />
      </Container>
    </Section>
  );
};

export default Thanks;
