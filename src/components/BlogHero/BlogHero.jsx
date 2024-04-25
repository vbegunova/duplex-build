import {
  Container,
  Image,
  InfoBox,
  Item,
  ItemTitle,
  List,
  Section,
  StyledBtn,
  Text,
  Title,
} from './BlogHero.styled';
import { blog } from '../../resources/blog';
import { useLocation } from 'react-router-dom';

const BlogHero = () => {
  const location = useLocation();

  return (
    <Section>
      <Container>
        <Title>Новини</Title>
        <List>
          {blog.map(item => {
            return (
              <Item key={item.index}>
                <Image src={item.img} />
                <InfoBox>
                  <ItemTitle>{item.title}</ItemTitle>
                  <Text>{item.description}</Text>
                  <StyledBtn to={`/blog/${item.index}`} state={{ from: location }}>Детальніше</StyledBtn>
                </InfoBox>
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

export default BlogHero;
