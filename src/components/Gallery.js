import React from 'react';

const Gallery = () => {

   return (
      <section className="gallery">
         <h3>Customer Gallery</h3>
         <div>
            <img src="/img/gallery1.webp" alt="Gallery 1" />
            <img src="/img/gallery2.webp" alt="Gallery 2" />
            <img src="/img/gallery3.webp" alt="Gallery 3" />
            <img src="/img/gallery4.webp" alt="Gallery 4" />
         </div>
         <a className="cta" href="#">View more</a>
      </section>
   );
}

export default Gallery;