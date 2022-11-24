import './usagePage.scss';

import { IconInfo } from '../../components/IconInfo/IconInfo';
import { ImageBlock } from '../../components/ImageBlock/ImageBlock';

import img from '../../img/benefit-image.jpg';

const usageElems = [
   {
      name: 'Медитации помогают справиться с беспокойством и тревогой',
      iconClass: 'fa-regular fa-face-surprise',
   },
   {
      name: 'Занятия йогой улучшают ментальное здоровье',
      iconClass: 'fa-solid fa-hand-holding-medical',
   },
   {
      name: 'Увеличивается выносливость',
      iconClass: 'fa-solid fa-person-running',
   },
   {
      name: 'Повышается мышечный тонус',
      iconClass: 'fa-solid fa-dumbbell',
   },
   {
      name: 'Улучшается работа с дыханием',
      iconClass: 'fa-solid fa-lungs',
   },
   {
      name: 'Уменьшаются боли во всём теле',
      iconClass: 'fa-solid fa-child-reaching',
   },
];

export const UsagePage = () => {
   return (
      <div className='usage container'>
         <div className='usage__icons'>
            {usageElems.map((elem, i) => (
               <IconInfo {...elem} key={i} />
            ))}
         </div>
         <ImageBlock
            descr={`Польза йоги неумолима и её нельзя переоценить. Эти древние практики, в отличие от многих видов спорта, способны только излечить человека, сделать его здоровее. Улучшаются все физические показатели, от выносливости и силы, до гибкости и мобильности суставов и позвоночника. Немалое значение йога имеет и для ментального здоровья: уменьшается тревога, появляется внутреннее спокойствие и умиротворение.`}
            reverse={true}
            img={img}
         />
      </div>
   );
};
