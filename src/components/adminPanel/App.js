import React from 'react';
import Aux from '../hoc/_Aux'
import Menu from '../adminPanel/Menu/Menu'

const App = (props) =>(
    <Aux>
        <Menu/>
        {props.children}
      </Aux>



);
  
export default App;
