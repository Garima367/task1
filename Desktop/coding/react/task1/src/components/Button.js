import React from 'react';

const Button = ({ value, buttonColor, onClick }) => {
  return (
    <div className=' text-white px-4 py-2 rounded-md' style={{ backgroundColor: buttonColor }}>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;