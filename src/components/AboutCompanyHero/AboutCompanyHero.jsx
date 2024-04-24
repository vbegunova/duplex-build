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
import Modal from '../Modal';
import { useState } from 'react';

const AboutCompanyHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section>
        <Container>
          <TextBox>
            <LeftBox>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                interdum, leo eget blandit ornare, sapien ex vehicula diam, sed
                lobortis enim mi eget arcu
              </Text>
              <ContactButton onClick={() => setIsModalOpen(true)}>
                Звернутися
              </ContactButton>
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
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default AboutCompanyHero;
