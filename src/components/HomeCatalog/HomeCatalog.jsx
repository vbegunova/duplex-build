import HomeCatalogItem from "components/HomeCatalogItem";
import { Container, List, Section, Title } from "./HomeCatalog.styled";

const HomeCatalog = () => {
  return (
    <Section>
      <Container>
        <Title>Каталог будинків</Title>
        <List>
          <HomeCatalogItem/>
          <HomeCatalogItem/>
          <HomeCatalogItem/>
        </List>
      </Container>
    </Section>
  );
};

export default HomeCatalog;