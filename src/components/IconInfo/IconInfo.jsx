import './iconInfo.scss';

export const IconInfo = ({ img, name, descr, iconClass }) => {
   return (
      <div className='icon-info'>
         {iconClass ? (
            <i className={iconClass}></i>
         ) : (
            <img src={img} alt={name} />
         )}
         <h4 className='icon-info__title small-title'>{name}</h4>
         {descr ? <p className='descr'>{descr}</p> : null}
      </div>
   );
};
