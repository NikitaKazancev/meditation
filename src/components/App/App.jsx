import './app.scss';

import { Header } from '../Header/Header';
import { MainSect } from '../MainSect/MainSect';
import { Industries } from '../Industries/Industries';
import { Products } from '../Products/Products';
import { Benefits } from '../Benefits/Benefits';
import { News } from '../News/News';
import { Footer } from '../Footer/Footer';

export const App = () => {
   return (
      <div className='app'>
         <Header />
         <MainSect />
         <Industries />
         <Products />
         <Benefits />
         <News />
         <Footer />
      </div>
   );
};
