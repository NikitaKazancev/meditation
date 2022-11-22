import './header.scss';

import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
   const hamburgerClick = () => {
      const nav = document.querySelector('.header__nav');
      const hamburger = document.querySelector('.header__hamburger');

      if (nav.classList.contains('header__nav_show')) {
         hamburger.classList.remove('header__hamburger_active');
         nav.classList.remove('header__nav_show');
         document.documentElement.classList.remove('no-scroll');
      } else {
         hamburger.classList.add('header__hamburger_active');
         nav.classList.add('header__nav_show');
         document.documentElement.classList.add('no-scroll');
      }
   };

   const linkClick = () => {
      if (document.documentElement.clientWidth <= 1400) {
         hamburgerClick();
      }
   };

   return (
      <header className='header'>
         <Link to={'/'} className='header__logo'>
            <img src={logo} alt='CARBONEX' />
         </Link>
         <div className='header__hamburger' onClick={hamburgerClick}>
            <div className='top'></div>
            <div className='mid'></div>
            <div className='bot'></div>
         </div>
         <nav className='header__nav descr'>
            <ul>
               <li>
                  <Link to='/' onClick={linkClick}>
                     Главная
                  </Link>
               </li>
               <li>
                  <Link to='/usage' onClick={linkClick}>
                     Польза
                  </Link>
               </li>
               <li>
                  <Link to='/about' onClick={linkClick}>
                     О компании
                  </Link>
               </li>
               <li>
                  <Link to='/news' onClick={linkClick}>
                     Новости
                  </Link>
               </li>
               <li>
                  <Link to='/contacts' onClick={linkClick}>
                     Контакты
                  </Link>
               </li>
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
