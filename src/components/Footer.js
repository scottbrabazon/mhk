import React from 'react';

const Footer = () => {

   let year = new Date().getFullYear();

   return (
      <footer>
         <div className="footer-logo">
            <hr />
            <a className="logo" href="/">
               <img src="/img/mhk.svg" alt="MHK" />
            </a>
            <hr />
         </div>
         <div className="footer-menu">
            <div>
               <h4>About</h4>
               <a href="#">Shop</a>
               <a href="#">Plan my kitchen</a>
               <a href="#">About us</a>
               <a href="#">Gallery</a>
            </div>
            <div>
               <h4>Service</h4>
               <a href="#">FAQ</a>
               <a href="#">Contact</a>
               <a href="#">How to buy</a>
               <a href="#">Downloads</a>
            </div>
            <div>
               <h4>Info</h4>
               <a href="#">Delivery</a>
               <a href="#">Terms</a>
               <a href="#">Privacy</a>
            </div>
            <div>
               <h4>Follow</h4>
               <div className="social">
                  <a href="#"><img src="/img/facebook-footer.svg" alt="Facebook" /></a>
                  <a href="#"><img src="/img/twitter-footer.svg" alt="Twitter" /></a>
                  <a href="#"><img src="/img/instagram-footer.svg" alt="Instagram" /></a>
               </div>
            </div>
         </div>
         <p>Copyright Online MTC Home Kitchens {year} - All rights reserved. Responsive website design, Development & Hosting by mtc.</p>
      </footer>
   );
}

export default Footer;