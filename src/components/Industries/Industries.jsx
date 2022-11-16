import './industries.scss';

import { IconInfo } from '../IconInfo/IconInfo';
import { Title } from '../Title/Title';

export const Industries = () => {
   const industries = [
      { name: 'целлюлоза' },
      { name: 'нера-фильтры' },
      { name: 'автомобильные' },
      { name: 'респираторные помещения' },
      { name: 'медицинские помещения' },
   ];

   return (
      <section className='industries container'>
         <Title
            title='отрасли'
            descr={
               <>
                  CARBONEX - является лидером в области фитрованных материалов.
                  Наши передовые материалы <br /> используются практически во
                  всех отраслях промышленности.
               </>
            }
         />
         {/* <h2 className='industries__title title'>ОТРАСЛИ</h2>
         <h3 className='descr'>
            
         </h3> */}
         <div className='industries__wrapper'>
            {industries.map((ind, i) => (
               <IconInfo iconClass={'icons-icon'} {...ind} key={i} />
            ))}
         </div>
      </section>
   );
};
