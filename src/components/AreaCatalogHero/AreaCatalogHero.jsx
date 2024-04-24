import AreaCatalogItem from 'components/AreaCatalogItem';
import { Container, List, Section, Title } from './AreaCatalogHero.styled';

const AreaCatalogHero = () => {
  return (
    <Section>
      <Container>
        <Title>С. Лісники</Title>
        <List>
          <AreaCatalogItem />
          <AreaCatalogItem />
          <AreaCatalogItem />
          <AreaCatalogItem />
          <AreaCatalogItem />
          <AreaCatalogItem />
        </List>
      </Container>
    </Section>
  );
};

export default AreaCatalogHero;
