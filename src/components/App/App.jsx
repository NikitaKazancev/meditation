import './app.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Page } from '../../pages/Page/Page';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { ContactsPage } from '../../pages/ContactsPage/ContactsPage';
import { NewsPage } from '../../pages/NewsPage/NewsPage';

export const App = () => {
   return (
      <div className='app'>
         <Header />
         <main>
            <Routes>
               <Route element={<MainPage />} path='/' />
               <Route
                  element={
                     <Page ContentComponent={AboutPage} title={'О компании'} />
                  }
                  path='/about'
               />
               <Route
                  element={
                     <Page ContentComponent={ContactsPage} title={'Контакты'} />
                  }
                  path='/contacts'
               />
               <Route
                  element={
                     <Page ContentComponent={NewsPage} title={'Новости'} />
                  }
                  path='/news'
               />
            </Routes>
         </main>
         <Footer />
      </div>
   );
};
