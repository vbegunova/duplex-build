import {
  BottomBox,
  BottomFirstText,
  BottomText,
  Container,
  Gallery,
  GalleryBox,
  Image,
  Section,
  Subtitle,
  Title,
  TopBox,
  TopFirstText,
  TopSecondText,
} from './AboutUs.styled';
import imageFirst from '../../images/about-company/about-us-first.jpg';
import imageSecond from '../../images/about-company/about-us-second.jpg';
import imageThird from '../../images/about-company/about-us-third.jpg';

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <TopBox>
          <Title>Про нас</Title>
          <TopFirstText>
            "Лінія Будівництва" - це визнаний лідер на ринку нерухомості, який
            спеціалізується на створенні інноваційних житлових просторів у Києві
            та області. Наша компанія має багаторічний досвід у галузі
            будівництва та реалізації житлових об'єктів, завдяки чому ми відомі
            як надійний партнер для клієнтів у пошуку ідеального житла.
          </TopFirstText>
          <TopSecondText>
            Ми пропонуємо широкий спектр об'єктів, включаючи житлові комплекси,
            котеджні містечка та дуплекси, що відповідають різним потребам та
            бюджетам. Наші проєкти відрізняються сучасним дизайном,
            використанням екологічних матеріалів та передовими технологіями
            будівництва, що робить їх надійним та стильним вибором для майбутніх
            власників.
          </TopSecondText>
        </TopBox>

        <GalleryBox>
          <Gallery>
            <Image src={imageFirst}></Image>
            <Image src={imageSecond}></Image>
            <Image src={imageThird}></Image>
          </Gallery>
        </GalleryBox>

        <BottomBox>
          <Subtitle>
            Наша команда експертів забезпечує повний цикл будівництва
          </Subtitle>
          <div>
            <BottomFirstText>
              Від концепції та проєктування до введення в експлуатацію та
              підтримки після заселення. Ми дбаємо про кожну деталь, щоб
              забезпечити високу якість та задоволення наших клієнтів.
            </BottomFirstText>
            <BottomText>
              "Лінія Будівництва" — це не просто будівельна компанія, але й
              спільнота людей, які працюють над створенням місць, де кожен може
              відчути себе як вдома. Наша місія — створювати житлові простори,
              де комфорт та гармонія поєднуються з інноваціями та естетикою,
              надихаючи населення на щасливе та яскраве майбутнє.
            </BottomText>
          </div>
        </BottomBox>
      </Container>
    </Section>
  );
};

export default AboutUs;
