import {
  AreaName,
  Button,
  FirstLine,
  Image,
  ImageThumb,
  Item,
  Line,
  Overlay,
  Price,
  PriceBox,
  SecondLine,
} from './AreaCatalogItem.styled';
import img from '../../images/about-company/about-us-third.jpg';

const AreaCatalogItem = () => {
  return (
    <Item>
      <ImageThumb to="/object">
        <Image src={img} alt="house" />
        <Overlay>
          <Button>Переглянути</Button>
        </Overlay>
      </ImageThumb>
      <AreaName>С. Лісники</AreaName>
      <div>
        <FirstLine>
          <p>330 кв. м.</p>
          <p>2 санвузоли</p>
        </FirstLine>
        <Line />
        <SecondLine>
          <p>4 кімнати</p>
          <p>15 соток</p>
        </SecondLine>
        <PriceBox>
          <p>Ціна:</p>
          <Price>700 000$</Price>
        </PriceBox>
      </div>
    </Item>
  );
};

export default AreaCatalogItem;
