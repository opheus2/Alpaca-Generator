import React from 'react'

import ControlButton from "./ControlButton";

export default function AccessorizeMenu({ config, onClick }) {
  return (
    <div className="accessories">
      <h3>ACCESSORIZE THE ALPACA'S</h3>
      <div className="items">
        {config.map((data) => (
          <ControlButton
            key={data.label.toLowerCase()}
            data={data}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}
