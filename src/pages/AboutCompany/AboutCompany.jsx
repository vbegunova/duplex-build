import Advantages from 'components/Advantages';
import AboutCompanyHero from '../../components/AboutCompanyHero';
import AboutUs from '../../components/AboutUs';
import Benefits from '../../components/Benefits';
import SliderGallery from '../../components/SliderGallery';

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
];

const AboutCompany = () => {
  return (
    <>
      <AboutCompanyHero />
      <AboutUs />
      <Benefits />
      <Advantages list={list} />
      <SliderGallery />
    </>
  );
};

export default AboutCompany;
