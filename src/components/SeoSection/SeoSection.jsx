import { Container, MoreBtn, Section, Text, Title } from './SeoSection.styled';

const SeoSection = () => {
  return (
    <Section>
      <Container>
        <Title>Текст для SEO</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          turpis enim. Morbi gravida arcu augue, eget interdum ex dapibus sed.
          Maecenas eleifend consequat est, a condimentum purus. Fusce nec
          maximus tellus, sit amet ullamcorper elit. Phasellus neque odio,
          suscipit a molestie ut, tristique in elit. Aenean elementum lorem mi,
          et porttitor nisl venenatis ut. Duis gravida odio a orci eleifend, non
          consectetur neque
        </Text>
        <MoreBtn>Читати більше</MoreBtn>
      </Container>
    </Section>
  );
};

export default SeoSection;
