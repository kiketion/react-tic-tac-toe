import React from 'react';
import SquareComponent from './SquareComponent';
function App() {
  return (
    <div className='app-header'>
      <h1 className='heading-text'>React Tic Tac Toe</h1>
      <div className='row jc-center'>
        <SquareComponent className='b-bottom-right' />
        <SquareComponent className='b-bottom-right' />
        <SquareComponent className='b-bottom' />
      </div>
      <div className='row jc-center'>
        <SquareComponent className='b-bottom-right' />
        <SquareComponent className='b-bottom-right' />
        <SquareComponent className='b-bottom' />
      </div>
      <div className='row jc-center'>
        <SquareComponent className='b-right' />
        <SquareComponent className='b-right' />
        <SquareComponent />
      </div>
    </div>
  );
}

export default App;
