import {
  ArrowIcon,
  Container,
  Image,
  Section,
  SliderBox,
  SliderBtn,
  SliderControls,
  SliderImages,
} from './SliderGallery.styled';
import imageFirst from '../../images/about-company/slider-img-first.jpg';
import imageSecond from '../../images/about-company/slider-img-second.jpg';
import sprite from '../../images/sprite.svg';

const SliderGallery = () => {
  return (
    <Section>
      <Container>
        <SliderBox>
          <SliderImages>
            <Image src={imageFirst} />
            <Image src={imageSecond} />
          </SliderImages>
          <SliderControls>
            <SliderBtn>
              <ArrowIcon>
                <use href={`${sprite}#icon-arrow-right`}></use>
              </ArrowIcon>
            </SliderBtn>
            <SliderBtn>
              <ArrowIcon>
                <use href={`${sprite}#icon-arrow-left`}></use>
              </ArrowIcon>
            </SliderBtn>
          </SliderControls>
        </SliderBox>
      </Container>
    </Section>
  );
};

export default SliderGallery;
