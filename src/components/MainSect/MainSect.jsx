import './mainSect.scss';

import mainBg from '../../img/main-bg.jpg';

export const MainSect = () => {
   const scrollTo = id => {
      const elem = document.getElementById(id);

      if (elem) {
         elem.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section className='main-sect'>
         <img src={mainBg} alt='meditation' className='main-sect__bg' />
         <div className='main-sect__wrapper'>
            <h1 className='main-sect__title'>
               Yoga&You &mdash; сеть йога-студий в Москве
            </h1>
            <h3 className='main-sect__descr descr'>
               Мы существуем, чтобы делать наших клиентов здоровее
            </h3>
            <button className='btn descr' onClick={() => scrollTo('products')}>
               Каталог продукции
            </button>
         </div>
      </section>
   );
};
