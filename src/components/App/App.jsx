import './app.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Page } from '../../pages/Page/Page';
import { AboutPage } from '../../pages/AboutPage/AboutPage';

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
            </Routes>
         </main>
         <Footer />
      </div>
   );
};
