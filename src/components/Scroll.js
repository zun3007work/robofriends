import React from 'react';

class Scroll extends React.Component {
  render() {
    return (
      <div
        style={{
          overflowY: 'scroll',
          borderTop: '1px solid black',
          height: '29rem',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
