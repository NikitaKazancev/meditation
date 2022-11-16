import { BtnTo } from '../../BtnTo/BtnTo';
import './product.scss';

export const Product = ({ name, descr, img }) => {
   return (
      <div className='product'>
         <img src={img} alt={name} />
         <div className='product__wrapper'>
            <h4 className='product__title small-title'>{name}</h4>
            <p className='product__descr descr'>{descr}</p>
            <BtnTo text={'перейти'} />
         </div>
      </div>
   );
};
