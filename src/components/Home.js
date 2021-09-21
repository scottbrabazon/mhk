import React from 'react';
import {Consumer} from './Context';
import Header from './Header';
import AboutUs from './AboutUs';
import Faqs from './Faqs';
import Gallery from './Gallery';

const Home = () => {
   
   return (

      <Consumer>

         {({data}) => (

            <React.Fragment>

               <Header />
               <AboutUs />
               <Faqs />
               <Gallery />

            </React.Fragment>

         )}

      </Consumer>
   );
}

export default Home;