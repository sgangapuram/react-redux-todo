import React from 'react';

const dynamicColor = (active) =>  active ? 'green' : 'black'; 
const dynamicFontWeight = (active) =>  active ? 'bolder' : ''; 
const dynamicBackground = (active) =>  active ? 'yellow' : 'white'; 
const Link = ({ active, onClick, children }) => (
  <button
    onClick={ onClick }
    style={{
      marginLeft: '4px',
      color: dynamicColor(active),
      fontWeight : dynamicFontWeight(active),
      background: dynamicBackground(active)
    }}
  >
    {children}
  </button>
);

export default Link;