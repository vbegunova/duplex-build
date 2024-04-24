import AreaCatalogItem from '../AreaCatalogItem';
import { Container, List, Section, Title } from './ObjectSimilar.styled';

const ObjectSimilar = () => {
  return (
    <Section>
      <Container>
        <Title>Схожі будинки</Title>
        <List>
          <AreaCatalogItem />
          <AreaCatalogItem />
          <AreaCatalogItem />
        </List>
      </Container>
    </Section>
  );
};

export default ObjectSimilar;
