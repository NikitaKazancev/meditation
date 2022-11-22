import './new.scss';

import { BtnTo } from '../../BtnTo/BtnTo';

export const New = ({ img, title, descr }) => {
   return (
      <div className='new'>
         <img src={img} alt={title} />
         <h3 className='new__title small-title'>{title}</h3>
         <p className='new__descr descr'>{descr}</p>
         {/* <BtnTo text={'Подробнее'} /> */}
      </div>
   );
};
