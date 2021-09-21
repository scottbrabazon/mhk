import React from 'react';

const AboutUs = () => {

   return (
      <section className="about-us">
         <div className="content">
            <div>
               <p className="sub-header">Quality Craftmanship from build to delivery</p>
               <h2>Discover the beauty of a handmade kitchen</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</p>
               <a className="cta" href="#">About Us</a>
            </div>
         </div>
         <div className="image">
            <img src="/img/section1-d.webp" alt="Kitchen" />
         </div>
      </section>
   );
}

export default AboutUs;