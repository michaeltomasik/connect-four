import React from 'react';
import './ConnectFourField.css';

const ConnectFourField = ({ fieldValue }) => {
  return (
    <div className="ConnectFourField">
      <div className="ConnectFourField__circle" style={{ backgroundColor: fieldValue.label }}>
      </div>
    </div>
  );
}

export default ConnectFourField;
