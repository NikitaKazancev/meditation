import './imageBlock.scss';

export const ImageBlock = ({ reverse, img, descr, title, left, className }) => {
   return (
      <article
         className={`image-block${reverse ? ' flex-reverse' : ''}${
            className ? ` ${className}` : ''
         }`}
      >
         <div className='image-block__bg-wrapper'>
            <img
               src={img}
               alt='info'
               className={`shadow${left ? ' shadow_left' : ''}`}
            />
         </div>
         <div className='image-block__content'>
            {title ? <h3 className='small-title'>{title}</h3> : null}
            <div className='image-block__descr descr'>{descr}</div>
         </div>
      </article>
   );
};
