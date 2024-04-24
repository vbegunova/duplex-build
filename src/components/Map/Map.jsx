import { useLocation } from 'react-router-dom';
import { ObjectMapSection, BlogMapSection, Container, MapBox, Section } from './Map.styled';

const Map = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  console.log(currentPage);

  return (
    <>
      {currentPage.includes('blog') ? (
        <BlogMapSection>
          <Container>
            <MapBox />
          </Container>
        </BlogMapSection>
      ) : currentPage === '/object' ? (
        <ObjectMapSection>
          <Container>
            <MapBox />
          </Container>
        </ObjectMapSection>
      ) : (
        <Section>
          <Container>
            <MapBox />
          </Container>
        </Section>
      )}
    </>
  );
};

export default Map;
