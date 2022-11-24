import './industries.scss';

import img1 from '../../img/industries/yoga.png';
import img2 from '../../img/industries/massage.png';
import img3 from '../../img/industries/pool.png';
import img4 from '../../img/industries/cristall.png';

import { IconInfo } from '../IconInfo/IconInfo';
import { Title } from '../Title/Title';

export const Industries = () => {
   const industries = [
      { name: 'медитация и йога', img: img1 },
      { name: 'массаж', img: img2 },
      { name: 'бассейн', img: img3 },
      { name: 'соляная комната', img: img4 },
   ];

   return (
      <section className='industries container'>
         <Title
            title='инфраструктура'
            descr={`Мы заботимся о том, чтобы люди в наших центрах были здоровее с
                  каждым днём, поэтому наши комплексы оборудованы всем
                  необходимым`}
         />
         <div className='industries__wrapper'>
            {industries.map((ind, i) => (
               <IconInfo name={ind.name} img={ind.img} key={i} />
            ))}
         </div>
      </section>
   );
};
