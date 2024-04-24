import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blog } from '../../resources/blog';
import {
  Container,
  Date,
  PublicDate,
  Section,
  Text,
  TextContainer,
  Title,
} from './Article.styled';
import Map from '../../components/Map';

const Article = () => {
  const { articleId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        let articleData;
        if (articleId) {
          const article = blog.find(item => item.index === parseInt(articleId));
          articleData = article || {};
        } else {
          articleData = {};
        }
        setData(articleData);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  const { title, text, date, bgImg } = data;

  return (
    <>
      <Section theme={{ background: bgImg }}>
        <Container>
          <Title>{title}</Title>
        </Container>
      </Section>
      <TextContainer>
        <Container>
          <Text>{text}</Text>
          <PublicDate>Дата публікації</PublicDate>
          <Date>{date}</Date>
        </Container>
      </TextContainer>
      <Map />
    </>
  );
};

export default Article;
