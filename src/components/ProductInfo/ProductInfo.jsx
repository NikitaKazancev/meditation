import './productInfo.scss';

export const ProductInfo = ({ name, descr, img, data }) => {
   return (
      <section className='product-info'>
         <div className='product-info__wrapper'>
            <div>
               <h3 className='product-info__title small-title'>{name}</h3>
               <p className='product-info__descr descr'>{descr}</p>
            </div>
            <img src={img} alt={name} />
         </div>
         {data ? (
            <div className='product-info__data'>
               {data.map((categoryData, i) => (
                  <div className='product-info__data-category' key={i}>
                     <h5 className='descr'>{categoryData[0]}</h5>
                     {categoryData.slice(1).map((item, j) => (
                        <p className='descr' key={j}>
                           {typeof item == 'string' ? (
                              item
                           ) : (
                              <i
                                 className={`fa-solid ${
                                    item ? 'fa-check' : 'fa-xmark'
                                 }`}
                              ></i>
                           )}
                        </p>
                     ))}
                  </div>
               ))}
            </div>
         ) : null}
      </section>
   );
};
