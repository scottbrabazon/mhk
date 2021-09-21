import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {

   // MOBILE NAVIGATION BURGER TOGGLE
   let id = null; 
   let pos = -100;

   function slideMenu() {
      const elem = document.getElementById("nav");
      const button = document.getElementById("nav-button");
      button.classList.toggle("open");
      if (pos === -100) {
         id = setInterval(openMenu, 1);
         function openMenu() {
            if (pos === 0) {
               clearInterval(id);
            } else {
               pos += 1;
               elem.style.left = pos + 'vw';
            }
         }
      } else {
         clearInterval(id);
         id = setInterval(closeMenu, 1);
         function closeMenu() {
            if (pos === -100) {
               clearInterval(id);
            } else {
               pos -= 1;
               elem.style.left = pos + 'vw';
            }
         }
      }
   }

   function closeOnSelection() {
      const elem = document.getElementById("nav");
      const button = document.getElementById("nav-button");
      button.classList.toggle("open");
      clearInterval(id);
      id = setInterval(closeMenu, 1);
      function closeMenu() {
         if (pos === -100) {
            clearInterval(id);
         } else {
            pos -= 1;
            elem.style.left = pos + 'vw';
         }
      }
   }

   window.onscroll=function(){
      var y = window.scrollY;
      const elem = document.getElementById("nav");
      if (y > 150) {
         elem.classList.add("moving");
      } else {
         elem.classList.remove("moving");
      }
   }


   return (

         <div className="nav">

            <button id="nav-button" onClick={slideMenu} aria-label="Burger menu" />

            <nav id="nav">

               <div className="nav-container">

                  <NavLink className="logo" onClick={closeOnSelection} activeClassName="nav-selected" exact to="/" >
                     <img src="/img/mhk.svg" alt="MHK" />
                  </NavLink>

                  <div className="social">
                     <a href="#"><img src="/img/facebook-f.svg" alt="Facebook" /></a>
                     <a href="#"><img src="/img/twitter.svg" alt="Twitter" /></a>
                     <a href="#"><img src="/img/instagram.svg" alt="Instagram" /></a>
                  </div>

                  <NavLink onClick={closeOnSelection} activeClassName="nav-selected" exact to="/" >
                     Shop
                  </NavLink>
                  <NavLink onClick={closeOnSelection} activeClassName="nav-selected" to="/" >
                     Plan my kitchen
                  </NavLink>
                  <NavLink onClick={closeOnSelection} activeClassName="nav-selected" to="/" >
                     About us
                  </NavLink>
                  <NavLink onClick={closeOnSelection} activeClassName="nav-selected" to="/" >
                     Gallery
                  </NavLink>
                  <NavLink onClick={closeOnSelection} activeClassName="nav-selected" to="/" >
                     <div className="cta">
                        My order
                     </div>
                  </NavLink>

               </div>

            </nav>

         </div>
   );
}

export default Nav;