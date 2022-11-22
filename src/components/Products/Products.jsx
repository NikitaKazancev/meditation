import './products.scss';

import subscription from '../../img/products/subscription.jpg';
import mat from '../../img/products/mat.jpg';
import bolster from '../../img/products/bolster.jpg';

import { Product } from './Product/Product';
import { Title } from '../Title/Title';

export const products = [
   {
      name: 'абонемент',
      descr: 'Скидка 10% на ваш первый абонемент!',
      img: subscription,
      data: [
         ['Типы', 'Лайт', 'Обычная', 'VIP'],
         ['Занятия в группе', true, true, true],
         ['Бесплатная парковка', true, true, true],
         ['Тренинги по личностному развитию', false, true, true],
         ['Доступ в массажный зал', false, true, true],
         ['Доступ в бассейн', false, false, true],
         ['Посещения соляной пещеры', false, false, true],
         ['Индивидуальные занятия с тренером', false, false, true],
      ],
   },
   {
      name: 'Коврик для йоги',
      descr: 'Двусторонний двухслойный толстый коврик для фитнеса и йоги - основной инвентарь на занятиях йогой, фитнесом, пилатесом, стрейчингом, растяжкой и другими видами спортивными направлениями!',
      img: mat,
   },
   {
      name: 'Болстер',
      descr: 'Отличный болстер для использования в практике пилатеса и йоги. Обеспечивает твердую ровную поддержку вашему телу. Достаточно долговечен.',
      img: bolster,
   },
];

export const Products = ({ setProductIndex }) => {
   return (
      <section className='products container'>
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
