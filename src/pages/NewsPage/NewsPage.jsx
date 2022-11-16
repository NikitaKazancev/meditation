import './newsPage.scss';

import img from '../../img/product.png';

import { useState } from 'react';
import { ImageBlock } from '../../components/ImageBlock/ImageBlock';

const news = [
   {
      img,
      title: 'Жизнь - это химия',
      descr: (
         <>
            Имеется спорная точка зрения, гласящая примерно следующее: действия
            представителей оппозиции набирают популярность среди определенных
            слоев населения, а значит, должны быть заблокированы в рамках своих
            собственных рациональных ограничений! <br />
            <br /> Сложно сказать, почему активно развивающиеся страны третьего
            мира формируют глобальную экономическую сеть и при этом —
            ассоциативно распределены по отраслям. <br />
            <br /> Однозначно, сделанные на базе интернет-аналитики выводы,
            которые представляют собой яркий пример континентально-европейского
            типа политической культуры, будут объявлены нарушающими
            общечеловеческие нормы этики и морали.
         </>
      ),
   },
];

export const NewsPage = () => {
   const createNews = () => {
      const res = [];
      for (let i = 0; i < 3; i++) {
         res.push(news[0]);
      }
      return res;
   };

   const [currentNews, setCurrentNews] = useState(createNews());

   const handleClick = () => {
      setCurrentNews(state => [...state, ...createNews()]);
   };

   return (
      <div className='container news-page'>
         {currentNews.map((n, i) => (
            <ImageBlock key={i} {...n} left={true} />
         ))}
         <button className='small-title btn btn_border' onClick={handleClick}>
            далее
         </button>
      </div>
   );
};
