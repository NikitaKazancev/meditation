import './title.scss';

export const Title = ({ title, descr }) => {
   return (
      <div className='title-block'>
         <h2 className='title'>{title}</h2>
         {descr ? <h4 className='descr'>{descr}</h4> : null}
      </div>
   );
};
