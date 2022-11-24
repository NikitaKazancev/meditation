import './productsPage.scss';

import { Product } from '../../components/Products/Product/Product';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { products } from '../../general/data';

export const ProductsPage = ({ index, setProductIndex }) => {
   return (
      <div className='products-page container'>
         <section className='products-page__products'>
            {products.map((p, i) => (
               <Product
                  {...p}
                  key={i}
                  setProductIndex={() => setProductIndex(i)}
                  active={index === i}
               />
            ))}
         </section>
         <ProductInfo {...products[index]} />
      </div>
   );
};
