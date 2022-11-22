import './news.scss';

import { New } from './New/New';
import { Title } from '../Title/Title';
import { news } from '../../general/data';

export const News = () => {
   return (
      <section className='news'>
         <Title title={'последние новости'} />
         <div className='news__wrapper'>
            {news.slice(0, 3).map((n, i) => (
               <New {...n} key={i} />
            ))}
         </div>
      </section>
   );
};
