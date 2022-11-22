import './mainPage.scss';

import { MainSect } from '../../components/MainSect/MainSect';
import { Industries } from '../../components/Industries/Industries';
import { Products } from '../../components/Products/Products';
import { Benefits } from '../../components/Benefits/Benefits';
import { News } from '../../components/News/News';
import { Helmet } from 'react-helmet';

export const MainPage = ({ setProductIndex }) => {
   return (
      <>
         <Helmet>
            <title>Yoga & You</title>
         </Helmet>
         <div className='main-page'>
            <MainSect />
            <Industries />
            <Products setProductIndex={setProductIndex} />
            <Benefits />
            <News />
         </div>
      </>
   );
};
