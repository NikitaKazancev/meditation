import './aboutInfo.scss';

export const AboutInfo = ({ reverse, img, descr }) => {
   return (
      <article className={`about-info${reverse ? ' flex-reverse' : ''}`}>
         <img src={img} alt='about' />
         <div className='about-info__descr descr'>{descr}</div>
      </article>
   );
};
