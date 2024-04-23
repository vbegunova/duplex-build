import HomeCatalog from '../../components/HomeCatalog';
import HomeAboutUs from '../../components/HomeAboutUs';
import HomeHero from '../../components/HomeHero';
import AboutDuplex from '../../components/AboutDuplex';
import Advantages from '../../components/Advantages';
import ContactForm from '../../components/ContactForm';
import FAQ from '../../components/FAQ';
import Request from '../../components/Request';

const list = [
  {
    title: 'Якість будівництва',
    description:
      'Наша компанія має бездоганну репутацію у сфері будівництва завдяки використанню найсучасніших технологій та високоякісних будівельних матеріалів.',
  },
  {
    title: "Різноманітність об'єктів",
    description:
      'Ми пропонуємо широкий вибір житлових комплексів, котеджних містечок та дуплексів, які відповідають різним потребам та бюджетам наших клієнтів.',
  },
  {
    title: 'Доступні ціни',
    description:
      "Наша компанія дбає про доступність своїх об'єктів, пропонуючи конкурентоспроможні ціни та спеціальні умови придбання.",
  },
  {
    title: 'Комфорт та безпека',
    description:
      'Наші будинки розроблені з урахуванням потреб майбутніх мешканців, забезпечуючи комфортне та безпечне життя в них.',
  },
  {
    title: 'Індивідуальний підхід',
    description:
      'Ми працюємо з кожним клієнтом індивідуально, враховуючи їхні побажання та потреби, щоб забезпечити найкращі умови для покупки житла.',
  },
  {
    title: 'Підтримка та сервіс',
    description:
      'Після придбання будинку наша компанія забезпечує надійну підтримку та сервіс, гарантуючи задоволення від покупки та спокій наших клієнтів.',
  },
];

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAboutUs />
      <HomeCatalog />
      <AboutDuplex />
      <Advantages list={list} />
      <ContactForm />
      <FAQ />
      <Request />
    </>
  );
};

export default Home;
