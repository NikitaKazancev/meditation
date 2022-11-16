import './header.scss';

import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
   return (
      <header className='header'>
         <Link to={'/'}>
            <img src={logo} alt='CARBONEX' className='header__logo' />
         </Link>
         <nav className='header__nav descr'>
            <ul>
               <li>
                  <Link to='/'>Главная</Link>
               </li>
               <li>
                  <Link to='/usage'>Области применения</Link>
               </li>
               {/* <li><Link to="/products">Продукция</Link></li> */}
               <li>
                  <Link to='/about'>О компании</Link>
               </li>
               <li>
                  <Link to='/news'>Новости</Link>
               </li>
               <li>
                  <Link to='/contacts'>Контакты</Link>
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
