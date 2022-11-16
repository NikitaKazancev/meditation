import './iconInfo.scss';

export const IconInfo = ({ iconClass, name, descr }) => {
   return (
      <div className='icon-info'>
         <i className={iconClass} />
         <h4 className='icon-info__title small-title'>{name}</h4>
         {descr ? <p className='descr'>{descr}</p> : null}
      </div>
   );
};
