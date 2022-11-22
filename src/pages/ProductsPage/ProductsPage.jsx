import './productsPage.scss';

import { products } from '../../components/Products/Products';
import { Product } from '../../components/Products/Product/Product';
import { useEffect, useState } from 'react';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';

export const ProductsPage = ({ index, setProductIndex }) => {
   const [activeProduct, setActiveProduct] = useState(products[0]);

   useEffect(() => {
      setActiveProduct(products[index]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [index]);

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
         <ProductInfo {...activeProduct} />
      </div>
   );
};
