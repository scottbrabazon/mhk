import React, {Component} from 'react';

const Mhk = React.createContext();

export class Provider extends Component {

   state = null

   // APP FUNCTIONS TO GO HERE

   render() {

      return (

         <Mhk.Provider value={{
            state: this.state,
         }}>
            {this.props.children}
         </Mhk.Provider>

      );
   }
}

export const Consumer = Mhk.Consumer;