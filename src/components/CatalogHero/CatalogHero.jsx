import HomeCatalogItem from "../HomeCatalogItem";
import { Container, List, Section, Title } from "./CatalogHero.styled";

const CatalogHero = () => {
  return(
    <Section>
      <Container>
        <Title>Будинки</Title>
        <List>
          <HomeCatalogItem />
          <HomeCatalogItem />
          <HomeCatalogItem />
          <HomeCatalogItem />
          <HomeCatalogItem />
          <HomeCatalogItem />
        </List>
      </Container>
    </Section>
  );
};

export default CatalogHero;