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
               CARBONEX является лидером <br /> в области фильтрационных <br />{' '}
               и энергетических решений.
            </h1>
            <h3 className='main-sect__descr descr'>
               Наши передовые материалы используются практически во всех
               отраслях <br /> промышленности и затрагивают каждый аспект
               современной жизни.
            </h3>
            <button className='btn descr' onClick={() => scrollTo('products')}>
               Каталог продукции
            </button>
         </div>
      </section>
   );
};
