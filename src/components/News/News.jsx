import './news.scss';

import { New } from './New/New';
import { Title } from '../Title/Title';
import { news } from '../../pages/NewsPage/NewsPage';
import { transformString } from '../../general/functions';

export const News = () => {
   return (
      <section className='news'>
         <Title title={'последние новости'} />
         <div className='news__wrapper'>
            {news.slice(0, 3).map((n, i) => (
               <New {...n} descr={transformString(n.descr, 100)} key={i} />
            ))}
         </div>
      </section>
   );
};
