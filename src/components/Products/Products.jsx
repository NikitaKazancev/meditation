import './products.scss';

import { Product } from './Product/Product';
import { Title } from '../Title/Title';

import { products } from '../../general/data';

export const Products = ({ setProductIndex }) => {
   return (
      <section className='products container' id='products'>
         <Title title={'продукция'} />
         <div className='products__wrapper'>
            {products.map((p, i) => (
               <Product
                  {...p}
                  key={i}
                  setProductIndex={() => setProductIndex(i)}
               />
            ))}
         </div>
      </section>
   );
};
