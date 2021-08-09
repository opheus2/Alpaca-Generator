import React from "react";

export default function ControlButton({ icon, onClick, data }) {
  const { id, label, selected, color, filename } = data;
  return (
    <>
      {color ? (
        <button
          className={`${selected ? "coloractive" : ""} ${
            color ? filename + " color" : ""
          }`}
          onClick={(e) => {
            onClick(data);
          }}
          id={id}
        >
        </button>
      ) : (
        <button
          className={`${selected ? "active" : ""} ${
            color ? filename + " color" : ""
          }`}
          onClick={(e) => {
            onClick(data);
          }}
          id={id}
        >
          {icon ? `<span>${icon}</span>}` : ""}
          {label ? label : "Button"}
        </button>
      )}
    </>
  );
}
