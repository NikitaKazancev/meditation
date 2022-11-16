import './btnTo.scss';

export const BtnTo = ({ to, text }) => {
   return (
      <div className='btn-to'>
         <button className='btn btn_main descr'>{text}</button>
         <i className='fa-solid fa-arrow-right'></i>
      </div>
   );
};
