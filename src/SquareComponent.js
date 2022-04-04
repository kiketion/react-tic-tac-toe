import React from 'react';

function SquareComponent(props) {
  const squareStyle = props.className ? `${props.className} square` : 'square';

  return (
    <span className={squareStyle} onClick={props.onClick}>
      {props.state}
    </span>
  );
}

export default SquareComponent;
