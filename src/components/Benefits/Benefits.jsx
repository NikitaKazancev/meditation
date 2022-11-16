import './benefits.scss';

import benefitsBg from '../../img/benefits.png';
import { Benefit } from './Benefit/Benefit';

export const Benefits = () => {
   const benefits = [
      { title: 'собственное производство' },
      { title: 'срок изготовления' },
      { title: 'отгрузка товара' },
   ];

   return (
      <div className='benefits'>
         <h2 className='benefits__title title'>преимущества</h2>
         <div className='benefits__bg-wrapper'>
            <img src={benefitsBg} alt='benefits' />
            <div className='benefits__wrapper'>
               {benefits.map((b, i) => (
                  <Benefit
                     {...b}
                     descr='CARBONEX - является лидером в области фитрованных материалов. Наши передовые материалы '
                     iconClass={'icons-icon'}
                     key={i}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};
