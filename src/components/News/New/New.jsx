import './new.scss';

import { transformString } from '../../../general/functions';
import { useState } from 'react';

export const New = ({ img, title, descr }) => {
   const [fullDescr, setFullDescr] = useState(false);

   return (
      <div className='new' onClick={() => setFullDescr(state => !state)}>
         <img src={img} alt={title} />
         <h3 className='new__title small-title'>{title}</h3>
         <p className='new__descr descr'>
            {fullDescr ? descr : transformString(descr, 100)}
         </p>
      </div>
   );
};
