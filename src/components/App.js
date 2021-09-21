import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';

import {
   BrowserRouter,
   Route
} from 'react-router-dom'

const App = () => (

   <BrowserRouter>
      <div className="container">
         <Nav />
         <Route exact path="/" component={Home} />
         <Route path="/shop" />
         <Route path="/plan" />
         <Route path="/about" />
         <Route path="/gallery" />
         <Route path="/basket" />
         <Footer />
      </div>
   </BrowserRouter>
);

export default App;

