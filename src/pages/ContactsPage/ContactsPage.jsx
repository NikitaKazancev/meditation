import './contactsPage.scss';

export const ContactsPage = () => {
   return (
      <div className='contacts container'>
         <div className='contacts__wrapper'>
            <div className='contacts__info'>
               <h3 className='small-title'>Контактная информация</h3>
               <address className='descr'>
                  <p>Адрес:</p>
                  <p>г. Санкт-Петербург, ул. Глиняная, 21</p>
                  <p>Телефон:</p>
                  <div className='contacts__phones'>
                     <p>Отдел заказов:</p>
                     <a href='tel:+73435062802'>+ 7 (343) 506-28-02</a>
                     <a href='tel:+78024204071'>+ 7 (802) 420-40-71</a>
                  </div>
               </address>
            </div>
            <div className='contacts__info'>
               <h3 className='small-title'>Реквизиты</h3>
               <p>
                  Реквизиты АО "Сорбент" <br />
                  Акционерное общество Сорбент <br />
                  614042, Пермский край, Пермь, ул. Гальперина, 6 <br />
                  ИНН 5908001417 <br />
                  КПП 590801001 <br />
                  ОГРН 1025901602770 <br />
                  Р/С 40702810800320300206 <br />
                  Ф-л Банка ГПБ (АО) «Западно Уральский» <br />
                  К/С 30101810200000000808 <br />
                  БИК 045773808
               </p>
            </div>
         </div>
         <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.867710671128!2d37.779983951636616!3d55.79553498046943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b534d099758f6b%3A0xa8913a9116e1b848!2s3Ya%20Parkovaya%20Ulitsa%2C%2033%2C%20Moskva%2C%20105037!5e0!3m2!1sen!2sru!4v1668852034344!5m2!1sen!2sru'
            title='Google Map'
            // width='600'
            // height='450'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='google-map shadow'
         ></iframe>
      </div>
   );
};
