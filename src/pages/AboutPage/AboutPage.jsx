import './aboutPage.scss';

import img1 from '../../img/about/about-1.jpg';
import img2 from '../../img/about/about-2.jpg';

import { Cooperation } from '../../components/Cooperation/Cooperation';
import { ImageBlock } from '../../components/ImageBlock/ImageBlock';

export const AboutPage = () => {
   const contentInfo = [
      {
         img: img1,
         descr: `Медитация и йога - отличный способ укрепить здоровье и улучшить качество жизни. Наша компания Yoga&You уже 10 лет помогает людям всех возрастов погрузиться в мир различных направлений древних духовных, психических и физических практик, пришедших к нам из древней Индии.`,
      },
      {
         img: img2,
         descr: `Для достижения максимальных результатов, каждый комплекс оборудован всем необходимым для комфортных и эффективных занятий: бассейн, массажный зал, зал для йоги и медитаций, а также соляные комнаты для быстрого восстановления. Выбирая Yoga&You вы выбираете здоровое тело и крепкий дух!`,
      },
   ];

   return (
      <>
         <section className='about-page__info container'>
            {contentInfo.map((info, i) => (
               <ImageBlock {...info} key={i} reverse={i % 2} />
            ))}
         </section>
         <Cooperation />
      </>
   );
};
