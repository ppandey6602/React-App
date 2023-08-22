// MyLinearLayout.js
import React from 'react';

function MyLinearLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button id="button1" style={{ width: 'auto', height: 'auto' }}>
        Button 1
      </button>
      <button id="button2" style={{ width: 'auto', height: 'auto' }}>
        Button 2
      </button>
      <button id="button3" style={{ width: 'auto', height: 'auto' }}>
        Button 3
      </button>
    </div>
  );
}

export default MyLinearLayout;
