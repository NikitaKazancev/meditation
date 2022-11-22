import './benefits.scss';

import { Benefit } from './Benefit/Benefit';
import { Title } from '../Title/Title';

export const Benefits = () => {
   const benefits = [
      {
         title: 'Экологичная локация',
         descr: 'Yoga&You всегда думает о здоровье своих клиентов, которое достигается в том числе за счёт чистого воздуха',
         iconClass: 'fa-solid fa-leaf',
      },
      {
         title: 'Находимся рядом',
         descr: 'Центр йоги Yoga&You расположен так, чтобы каждому было удобно до нас добираться',
         iconClass: 'fa-solid fa-house',
      },
      {
         title: 'Многолетний опыт',
         descr: 'Наши коучи имеют большой стаж работы и являются профессионалами в сфере йоги',
         iconClass: 'fa-regular fa-thumbs-up',
      },
   ];

   return (
      <section className='benefits'>
         <Title title={'преимущества'} />
         <div className='benefits__bg-wrapper'>
            <div className='benefits__bg'></div>
            <div className='benefits__wrapper container'>
               {benefits.map((b, i) => (
                  <Benefit {...b} key={i} />
               ))}
            </div>
         </div>
      </section>
   );
};
