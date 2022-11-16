import { Title } from '../Title/Title';
import './cooperation.scss';

import img from '../../img/coop-logo.png';

export const Cooperation = () => {
   const logos = [{ img }, { img }, { img }, { img }, { img }];

   return (
      <section className='cooperation'>
         <Title
            title={'сотрудничество'}
            descr={
               <>
                  CARBONEX - является лидером в области фитрованных материалов.
                  Наши передовые материалы <br /> используются практически во
                  всех отраслях промышленности.
               </>
            }
         />
         <div className='cooperation__wrapper'>
            {logos.map(({ img }) => (
               <img src={img} alt='logo' />
            ))}
         </div>
      </section>
   );
};
