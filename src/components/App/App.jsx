import './app.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Page } from '../../pages/Page/Page';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { ContactsPage } from '../../pages/ContactsPage/ContactsPage';
import { NewsPage } from '../../pages/NewsPage/NewsPage';
import { UsagePage } from '../../pages/UsagePage/UsagePage';
import { ProductsPage } from '../../pages/ProductsPage/ProductsPage';
import { useState } from 'react';

export const App = () => {
   const [productIndex, setProductIndex] = useState(0);

   return (
      <div className='app'>
         <Header />
         <main>
            <Routes>
               <Route
                  element={<MainPage setProductIndex={setProductIndex} />}
                  path='/'
               />
               <Route
                  element={
                     <Page
                        ContentComponent={<AboutPage />}
                        title={'О компании'}
                     />
                  }
                  path='/about'
               />
               <Route
                  element={
                     <Page
                        ContentComponent={<ContactsPage />}
                        title={'Контакты'}
                     />
                  }
                  path='/contacts'
               />
               <Route
                  element={
                     <Page ContentComponent={<NewsPage />} title={'Новости'} />
                  }
                  path='/news'
               />
               <Route
                  element={
                     <Page
                        ContentComponent={<UsagePage />}
                        title={'Польза йоги'}
                     />
                  }
                  path='/usage'
               />
               <Route
                  element={
                     <Page
                        ContentComponent={
                           <ProductsPage
                              index={productIndex}
                              setProductIndex={setProductIndex}
                           />
                        }
                        title={'Продукты'}
                     />
                  }
                  path='/products'
               />
            </Routes>
         </main>
         <Footer />
      </div>
   );
};
