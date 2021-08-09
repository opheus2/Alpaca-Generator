import React from "react";

export default function AlpacaImage({ config }) {
  const { hair, neck, nose, ear, mouth, accessory, leg, eyes, background } = config;
  return (
    <div className="alpaca" id="alpacaImage">
      <img src={`../assets/backgrounds/${background}.png`} alt="background" />
      <img src={`../assets/ears/${ear}.png`} alt="ears" />
      <img src={`../assets/neck/${neck}.png`} alt="neck" />
      <img src={`../assets/leg/${leg}.png`} alt="leg" />
      <img src={`../assets/nose/${nose}.png`} alt="nose" />
      <img src={`../assets/hair/${hair}.png`} alt="hair" />
      <img src={`../assets/eyes/${eyes}.png`} alt="eyes" />
      <img src={`../assets/mouth/${mouth}.png`} alt="mouth" />
      {accessory && (
        <img src={`../assets/accessories/${accessory}.png`} alt="accessory" />
      )}
    </div>
  );
}
