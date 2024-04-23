import {
  ContactButton,
  Container,
  ImageDesktop,
  ImageMobile,
  LeftBox,
  RightBox,
  Section,
  Subtitle,
  Text,
  TextBox,
  Title,
} from './AboutCompanyHero.styled';
import imageDesktop from '../../images/about-company/hero-image-desktop.jpg';
import imageMobile from '../../images/about-company/hero-image-mobile.jpg';

const AboutCompanyHero = () => {
  return (
    <Section>
      <Container>
        <TextBox>
          <LeftBox>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              interdum, leo eget blandit ornare, sapien ex vehicula diam, sed
              lobortis enim mi eget arcu
            </Text>
            <ContactButton>Звернутися</ContactButton>
          </LeftBox>
          <RightBox>
            <Title>Про компанію</Title>
            <Subtitle>«Лінія Будівництва»</Subtitle>
          </RightBox>
        </TextBox>
        <ImageMobile src={imageMobile} />
        <ImageDesktop src={imageDesktop} />
      </Container>
    </Section>
  );
};

export default AboutCompanyHero;
