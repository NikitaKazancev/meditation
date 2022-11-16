import './products.scss';

import product from '../../img/product.png';
import { Product } from './Product/Product';

export const Products = () => {
   const industries = [
      {
         name: 'фильтры',
         descr: 'CARBONEX - является лидером в области фитрованных материалов.',
      },
      {
         name: 'фильтры',
         descr: 'CARBONEX - является лидером в области фитрованных материалов.',
      },
      {
         name: 'фильтры',
         descr: 'CARBONEX - является лидером в области фитрованных материалов.',
      },
   ];

   return (
      <div className='products container'>
         <h2 className='title'>ПРОДУКЦИЯ</h2>
         <div className='products__wrapper'>
            {industries.map((p, i) => (
               <Product img={product} {...p} key={i} />
            ))}
         </div>
      </div>
   );
};
