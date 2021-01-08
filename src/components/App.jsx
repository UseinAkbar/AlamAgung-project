import React, {useState} from 'react';
import Heading from './Heading';
import Main from './Main';
import Footer from './Footer';

const App = ({containerWidth}) => {

  return (
    <div className='container'>
      <Heading />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
