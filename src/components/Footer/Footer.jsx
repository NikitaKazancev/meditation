import './footer.scss';

export const Footer = () => {
   return (
      <footer className='footer'>
         <div className='container descr'>
            <div>© Все права защищены. 2022</div>
            <address>
               <a href='mailto:carbonex@yandex.ru'>carbonex@yandex.ru</a>
               <div>Россия, 642300, г. Москва, ул. 8 марта, д.45</div>
            </address>
         </div>
      </footer>
   );
};
