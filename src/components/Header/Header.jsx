import './header.scss';

import logo from '../../img/logo.png';

export const Header = () => {
   return (
      <header className='header'>
         <img src={logo} alt='CARBONEX' className='header__logo' />
         <nav className='header__nav descr'>
            <ul>
               <li>Главная</li>
               <li>Области применения</li>
               <li>Продукция</li>
               <li>О компании</li>
               <li>Новости</li>
               <li>Контакты</li>
            </ul>
         </nav>
         <div className='header__src'>
            <div className='header__phone'>
               <a href='tel:+79818438804' className='descr'>
                  <i className='fa-solid fa-phone'></i>
                  +7 (981) 843-88-04
               </a>
               <a
                  href='tel:+79818438804'
                  className='header__phone_dashed descr'
               >
                  Позвонить менеджеру
               </a>
            </div>
            <button className='btn btn_border descr'>оставить заявку</button>
         </div>
      </header>
   );
};
