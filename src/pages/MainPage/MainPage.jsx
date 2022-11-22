import './mainPage.scss';

import { MainSect } from '../../components/MainSect/MainSect';
import { Industries } from '../../components/Industries/Industries';
import { Products } from '../../components/Products/Products';
import { Benefits } from '../../components/Benefits/Benefits';
import { News } from '../../components/News/News';

export const MainPage = ({ setProductIndex }) => {
   return (
      <div className='main-page'>
         <MainSect />
         <Industries />
         <Products setProductIndex={setProductIndex} />
         <Benefits />
         <News />
      </div>
   );
};
