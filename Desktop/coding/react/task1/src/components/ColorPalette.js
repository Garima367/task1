import React from 'react';

// ColorPalette component
const ColorPalette = ({ onSelectColor }) => {
  const colors = ['#567d61', '#f56816', '#1c87d9', '#cf1735', '#a62c28'];

  const handleColorClick = (color) => {
    onSelectColor(color);
  };

  return (
    <div className="color-palette m-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-4 h-4 m-2 rounded-full cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;
