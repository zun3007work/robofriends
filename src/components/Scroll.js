import React from 'react';

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        borderTop: '1px solid black',
        height: '29rem',
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
