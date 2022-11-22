import { Title } from '../Title/Title';
import './cooperation.scss';

import img1 from '../../img/cooperation/partners-1.jpg';
import img2 from '../../img/cooperation/partners-2.jpg';
import img3 from '../../img/cooperation/partners-3.jpg';

export const Cooperation = () => {
   const logos = [{ img: img1 }, { img: img2 }, { img: img3 }];

   return (
      <section className='cooperation'>
         <Title
            title={'сотрудничество'}
            descr={`Мы сотрудничаем с организациями, для которых ваше здоровье - важнее всего.`}
         />
         <div className='cooperation__wrapper'>
            {logos.map(({ img }, i) => (
               <img src={img} alt='logo' key={i} />
            ))}
         </div>
      </section>
   );
};
