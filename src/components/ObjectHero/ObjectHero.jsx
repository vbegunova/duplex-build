import {
  Boxes,
  Button,
  ButtonCheck,
  ButtonRecord,
  ButtonsBox,
  Container,
  Description,
  IconBox,
  Image,
  InfoIconFill,
  InfoIconStroke,
  InfoItem,
  InfoList,
  Item,
  Line,
  List,
  Number,
  PriceBox,
  PriceText,
  Section,
  Square,
  SquareInfo,
  Text,
  Title,
} from './ObjectHero.styled';
import img from '../../images/house-img.jpg';
import sprite from '../../images/sprite.svg';
import Modal from '../Modal';
import { useState } from 'react';

const ObjectHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Section>
        <Container>
          <Title>Дуплекс 330 м², с. Лісники</Title>
          <Boxes>
            <div>
              <Image src={img} />
              <ButtonsBox>
                <Button className="active">Про будинок</Button>
                <Button>Планування</Button>
              </ButtonsBox>
              <List>
                <Item>
                  <IconBox>
                    <InfoIconFill>
                      <use href={`${sprite}#icon-bed`}></use>
                    </InfoIconFill>
                  </IconBox>
                  <div>
                    <Number>4</Number>
                    <Text>Спальні</Text>
                  </div>
                </Item>
                <Item>
                  <IconBox>
                    <InfoIconFill>
                      <use href={`${sprite}#icon-wardrobe`}></use>
                    </InfoIconFill>
                  </IconBox>
                  <div>
                    <Number>2</Number>
                    <Text>Гардероби</Text>
                  </div>
                </Item>
                <Item>
                  <IconBox>
                    <InfoIconStroke>
                      <use href={`${sprite}#icon-toilet`}></use>
                    </InfoIconStroke>
                  </IconBox>
                  <div>
                    <Number>3</Number>
                    <Text>Санвузоли</Text>
                  </div>
                </Item>
                <Item>
                  <IconBox>
                    <InfoIconFill>
                      <use href={`${sprite}#icon-office`}></use>
                    </InfoIconFill>
                  </IconBox>
                  <div>
                    <Number>1</Number>
                    <Text>Кабінети</Text>
                  </div>
                </Item>
                <Item>
                  <IconBox>
                    <InfoIconStroke>
                      <use href={`${sprite}#icon-tech-room`}></use>
                    </InfoIconStroke>
                  </IconBox>
                  <div>
                    <Number>1</Number>
                    <Text>Тех. кімнати</Text>
                  </div>
                </Item>
              </List>
              <Description>
                Продається елітний двоповерховий будинок площею 330 кв.м з
                гаражем, балконом і терасою, розташований в закритому котеджному
                містечку с. Лісники, що знаходиться в передмісті Києва. Цей
                великий, просторий будинок відзначається зручним плануванням та
                високими стелями, що створюють відчуття простору та комфорту.
                Гараж розрахований на зберігання двох автомобілів, що
                забезпечить комфортне розташування вашого автопарку. Панорамні
                вікна дозволять вам насолоджуватися захоплюючими видами
                соснового лісу, що межує з вашим подвір'ям, кожен день. Земельна
                ділянка, що прилегла до будинку, облагороджена та відкрита для
                реалізації будь-яких дизайнерських ідей та проектів. Якщо ви
                шукаєте великий, ергономічний будинок в мальовничій місцевості,
                цей варіант точно відповідає вашим потребам.
              </Description>
            </div>
            <div>
              <Square>
                <p>Загальна площа</p>
                <SquareInfo>330 м²</SquareInfo>
              </Square>
              <InfoList>
                <InfoItem>
                  <p>Будинок</p>
                  <p>290 м²</p>
                </InfoItem>
                <Line />
                <InfoItem>
                  <p>Кухня</p>
                  <p>20 м²</p>
                </InfoItem>
                <Line />
                <InfoItem>
                  <p>Ганок</p>
                  <p>5 м²</p>
                </InfoItem>
                <Line />
                <InfoItem>
                  <p>Тераса</p>
                  <p>30 м²</p>
                </InfoItem>
                <Line />
                <InfoItem>
                  <p>Мансарда</p>
                  <p>40 м²</p>
                </InfoItem>
                <Line />
              </InfoList>
              <Square>
                <p>Площа ділянки</p>
                <SquareInfo>19 сот.</SquareInfo>
              </Square>
              <InfoList>
                <InfoItem>
                  <p>Вода</p>
                  <p>Свердловина</p>
                </InfoItem>
                <Line />
                <InfoItem>
                  <p>Електрика</p>
                  <p>16 кВт</p>
                </InfoItem>
                <Line />
                <InfoItem>
                  <p>Каналізація</p>
                  <p>14 м²</p>
                </InfoItem>
                <Line />
              </InfoList>
              <PriceBox>
                <p>Вартість</p>
                <PriceText>790,000 $</PriceText>
              </PriceBox>
              <div>
                <ButtonRecord onClick={() => setIsModalOpen(true)}>
                  Записатись на перегляд
                </ButtonRecord>
                <ButtonCheck onClick={() => setIsModalOpen(true)}>
                  Уточнити наявність
                </ButtonCheck>
              </div>
            </div>
          </Boxes>
        </Container>
      </Section>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ObjectHero;
