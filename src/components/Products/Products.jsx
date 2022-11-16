import './products.scss';

import product from '../../img/product.png';
import { Product } from './Product/Product';
import { Title } from '../Title/Title';

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
      <section className='products container'>
         <Title title={'продукция'} />
         <div className='products__wrapper'>
            {industries.map((p, i) => (
               <Product img={product} {...p} key={i} />
            ))}
         </div>
      </section>
   );
};
