import './news.scss';

import { New } from './New/New';
import img from '../../img/product.png';

export const News = () => {
   const news = [
      { title: 'жизнь - это химия' },
      { title: 'жизнь - это химия' },
      { title: 'Ао “СОрбент” ПОСЕТИЛ ГУБЕРНАТОР' },
   ];

   return (
      <div className='news'>
         <h2 className='news__title title'>новости</h2>
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
      </div>
   );
};
