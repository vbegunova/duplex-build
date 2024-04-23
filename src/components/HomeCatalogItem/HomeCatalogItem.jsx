import { Item, Image, ImageThumb, Overlay, Button, ItemTitle, InfoBox, PriceBox, Price, Square } from './HomeCatalogItem.styled';
import objectImage from '../../images/home/house-image.jpg';

const HomeCatalogItem = () => {
  return (
    <Item>
      <ImageThumb to="/">
        <Image src={objectImage} alt="house"/>
        <Overlay>
          <Button>Переглянути</Button>
        </Overlay>
      </ImageThumb>
      <ItemTitle>Назва місцевості</ItemTitle>
      <InfoBox>
        <PriceBox>
          <Price>Від 100 000$</Price>
        </PriceBox>
        <Square>150-260 кв м</Square>
      </InfoBox>
    </Item>
  );
};

export default HomeCatalogItem;
