import React from 'react';

function SquareComponent(props) {
  const squareStyle = props.className ? `${props.className} square` : 'square';

  return <span className={squareStyle}>X</span>;
}

export default SquareComponent;
