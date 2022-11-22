import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './page.scss';

export const Page = ({ title, ContentComponent }) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         <div className='page'>
            <ul className='page__breadcrumbs descr'>
               <li>
                  <Link to={'/'}>
                     Главная<i className='fa-solid fa-arrow-right'></i>
                  </Link>
               </li>
               <li>{title}</li>
            </ul>
            <h2 className='page__title title'>{title}</h2>
            <div className='page__content'>{ContentComponent}</div>
         </div>
      </>
   );
};
