import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Header = () => {

   return (
      <header>

         <Carousel   infiniteLoop={true} 
                     centerMode={true} 
                     centerSlidePercentage={100} 
                     showStatus={false}
                     labels={false}
                     autoplay={true}
                     showArrows={false}
                     autoFocus={true}
                     showThumbs={false}>
            <div>
               <picture>
                  <source media="(max-width: 767px)" type="image/webp" srcSet="/img/header-m.webp" />
                  <source media="(max-width: 1299px)" type="image/webp" srcSet="/img/header-t.webp" />
                  <img src="/img/header-d.webp" alt="MHK Slide 1" />
               </picture>
            </div>
            <div>
               <picture>
                  <source media="(max-width: 767px)" type="image/webp" srcSet="/img/header-m.webp" />
                  <source media="(max-width: 1299px)" type="image/webp" srcSet="/img/header-t.webp" />
                  <img src="/img/header-d.webp" alt="MHK Slide 2" />
               </picture>
            </div>
            <div>
               <picture>
                  <source media="(max-width: 767px)" type="image/webp" srcSet="/img/header-m.webp" />
                  <source media="(max-width: 1299px)" type="image/webp" srcSet="/img/header-t.webp" />
                  <img src="/img/header-d.webp" alt="MHK Slide 2" />
               </picture>
            </div>

         </Carousel>

         <div className="text-container">
            <p className="sub-header">Design and order your new kitchen online today</p>
            <h1>Bespoke & made to measure handmade kitchen design</h1>
            <a className="cta" href="#">Order Now</a>
         </div>
      </header>
   );
}

export default Header;