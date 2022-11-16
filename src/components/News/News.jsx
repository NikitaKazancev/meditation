import './news.scss';

import { New } from './New/New';
import img from '../../img/product.png';
import { Title } from '../Title/Title';

export const News = () => {
   const news = [
      { title: 'жизнь - это химия' },
      { title: 'жизнь - это химия' },
      { title: 'Ао “СОрбент” ПОСЕТИЛ ГУБЕРНАТОР' },
   ];

   return (
      <section className='news'>
         <Title title={'новости'} />
         <div className='news__wrapper'>
            {news.map((n, i) => (
               <New
                  {...n}
                  img={img}
                  descr='CARBONEX - является лидером в области фитрованных материалов. Наши передовые материалы '
                  key={i}
               />
            ))}
         </div>
      </section>
   );
};
