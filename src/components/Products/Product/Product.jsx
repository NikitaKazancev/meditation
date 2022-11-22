import './product.scss';

import { Link } from 'react-router-dom';

export const Product = ({ name, img, setProductIndex, active }) => {
   return (
      <Link
         to={'/products'}
         className={`product${active ? ' active' : ''}`}
         onClick={setProductIndex}
      >
         <img src={img} alt={name} />
         <div className='product__wrapper'>
            <h4 className='product__title small-title'>{name}</h4>
         </div>
      </Link>
   );
};
