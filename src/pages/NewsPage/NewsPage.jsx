import './newsPage.scss';

import { useState } from 'react';
import { ImageBlock } from '../../components/ImageBlock/ImageBlock';
import { news } from '../../general/data';

export const NewsPage = () => {
   const [currentNews, setCurrentNews] = useState(news.slice(0, 3));

   const handleClick = () => {
      setCurrentNews(state => [
         ...state,
         ...news.slice(
            currentNews.length,
            news.length - currentNews.length >= 3
               ? currentNews.length + 3
               : news.length
         ),
      ]);
   };

   return (
      <div className='container news-page'>
         {currentNews.map((n, i) => (
            <ImageBlock
               key={i}
               {...n}
               left={true}
               className={`wow animate__${
                  i % 2 ? 'fadeInRight' : 'fadeInLeft'
               }`}
            />
         ))}
         {currentNews.length < news.length ? (
            <button
               className='small-title btn btn_border'
               onClick={handleClick}
            >
               далее
            </button>
         ) : null}
      </div>
   );
};
