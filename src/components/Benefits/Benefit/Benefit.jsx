import './benefit.scss';

export const Benefit = ({ iconClass, title, descr }) => {
   return (
      <div className='benefit'>
         <div className='benefit__wrapper'>
            <i className={iconClass}></i>
            <div className='benefit__title small-title'>{title}</div>
         </div>
         <div className='benefit__descr descr'>{descr}</div>
      </div>
   );
};
