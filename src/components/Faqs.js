import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Faqs = () => {

   return (
      <section className="faq">

         <Carousel   showArrows={true} 
                     infiniteLoop={true} 
                     centerSlidePercentage={100} 
                     showStatus={false}
                     showThumbs={false}
                     autoplay={true}>

            <div className="faq-slide">
               <p className="sub-header">What Our Customers Say</p>
               <h3>Over 35 years experience designing handmade kitchens</h3>
               <blockquote>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</blockquote>
               <figcaption>Jane, Dundee</figcaption>
            </div>

            <div className="faq-slide">
               <p className="sub-header">What Our Customers Say</p>
               <h3>Over 35 years experience designing handmade kitchens</h3>
               <blockquote>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</blockquote>
               <figcaption>Jane, Dundee</figcaption>
            </div>

            <div className="faq-slide">
               <p className="sub-header">What Our Customers Say</p>
               <h3>Over 35 years experience designing handmade kitchens</h3>
               <blockquote>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</blockquote>
               <figcaption>Jane, Dundee</figcaption>
            </div>

         </Carousel>

         <a className="cta mobile" href="#">FAQs</a>
         <a className="cta desktop" href="#">Frequently Asked Questions</a>

      </section>
   );
}

export default Faqs;