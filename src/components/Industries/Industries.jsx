import './industries.scss';

import { IconInfo } from '../IconInfo/IconInfo';

export const Industries = () => {
   const industries = [
      { name: 'целлюлоза' },
      { name: 'нера-фильтры' },
      { name: 'автомобильные' },
      { name: 'респираторные помещения' },
      { name: 'медицинские помещения' },
   ];

   return (
      <div className='industries container'>
         <h2 className='industries__title title'>ОТРАСЛИ</h2>
         <h3 className='descr'>
            CARBONEX - является лидером в области фитрованных материалов. Наши
            передовые материалы <br /> используются практически во всех отраслях
            промышленности.
         </h3>
         <div className='industries__wrapper'>
            {industries.map((ind, i) => (
               <IconInfo iconClass={'icons-icon'} {...ind} key={i} />
            ))}
         </div>
      </div>
   );
};
