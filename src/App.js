import React, { useState } from "react";

import "./App.css";
import "./main.css";
import { data } from "./lib/alpaca";
import AlpacaImage from "./components/AlpacaImage";
import ControlMenu from "./components/ControlMenu";
import { toJpeg } from "html-to-image";
import download from "downloadjs";
import OtherControls from "./components/OtherControls";

function App() {
  const [alpacaData, setAlpacaData] = useState(data);

  const [hair, setHair] = useState("default");
  const [neck, setNeck] = useState("default");
  const [leg, setLeg] = useState("default");
  const [nose] = useState("default");
  const [mouth, setMouth] = useState("default");
  const [background, setBackground] = useState("default");
  const [ear, setEar] = useState("default");
  const [accessory, setAccessory] = useState(null);
  const [eyes, setEyes] = useState("default");
  const [activeSubMenu, setActiveSubMenu] = useState(alpacaData[0]);

  const config = {
    hair,
    neck,
    leg,
    nose,
    mouth,
    background,
    ear,
    accessory,
    eyes,
  };

  const selectMenu = (data) => {
    const menu = { ...data, selected: !data.selected };
    setActiveSubMenu(menu);
    const newAlpacaData = [...alpacaData];
    newAlpacaData.map((alp) => (alp.selected = false));
    newAlpacaData[data.id] = menu;
    setAlpacaData(newAlpacaData);
  };

  const selectStyle = (data) => {
    const newActiveSubMenuItems = [...activeSubMenu.items];

    newActiveSubMenuItems.map((alp) => (alp.selected = false));
    newActiveSubMenuItems[data.id].selected =
      !newActiveSubMenuItems[data.id].selected;

    const newActiveSubMenu = { ...activeSubMenu };
    newActiveSubMenu.items = newActiveSubMenuItems;
    setActiveSubMenu(newActiveSubMenu);

    switch (activeSubMenu.label.toLocaleLowerCase()) {
      case "backgrounds":
        setBackground(data.filename);
        break;
      case "ears":
        setEar(data.filename);
        break;
      case "eyes":
        setEyes(data.filename);
        break;
      case "neck":
        setNeck(data.filename);
        break;
      case "hair":
        setHair(data.filename);
        break;
      case "mouth":
        setMouth(data.filename);
        break;
      case "leg":
        setLeg(data.filename);
        break;
      case "accessories":
        if (data.label !== "Default") {
          setAccessory(data.filename);
        }
        break;

      default:
        break;
    }
  };

  const downloadAlpaca = () => {
    const alpacaImage = document.getElementById("alpacaImage");
    toJpeg(alpacaImage, {
      canvasWidth: 720,
      canvasHeight: 720,
    }).then((dataurl) => {
      download(dataurl, "Alpaca.jpg");
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Alpaca Generator</h1>
      </header>
      <main className="wrapper">
        <div className="placeholder">
          <AlpacaImage config={config} />
          <OtherControls downloadAlpaca={downloadAlpaca} />
        </div>
        <ControlMenu
          config={alpacaData}
          activeSubMenu={activeSubMenu}
          selectMenu={selectMenu}
          selectStyle={selectStyle}
        />
      </main>
    </div>
  );
}

export default App;
