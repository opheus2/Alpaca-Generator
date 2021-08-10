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
    newActiveSubMenuItems.map((item) => (item.selected = false));
    newActiveSubMenuItems[data.id].selected =
      !newActiveSubMenuItems[data.id].selected;

    setSelection(
      activeSubMenu.label.toLocaleLowerCase(),
      data.filename.toLocaleLowerCase()
    );
  };

  const setSelection = (label, filename) => {
    switch (label) {
      case "backgrounds":
        setBackground(filename);
        break;
      case "ears":
        setEar(filename);
        break;
      case "eyes":
        setEyes(filename);
        break;
      case "neck":
        setNeck(filename);
        break;
      case "hair":
        setHair(filename);
        break;
      case "mouth":
        setMouth(filename);
        break;
      case "leg":
        setLeg(filename);
        break;
      case "accessories":
        console.log(filename);
        if (filename !== "default") {
          setAccessory(filename);
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

  const randomizeAlpaca = () => {
    alpacaData.forEach((alpaca, index) => {
      const random = (Math.random() * alpaca.items.length) | 0;
      alpaca.items.map((item) => (item.selected = false));
      alpaca.items[random].selected = true;
      setSelection(
        alpaca.label.toLocaleLowerCase(),
        alpaca.items[random].filename
      );
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
          <OtherControls
            randomizeAlpaca={randomizeAlpaca}
            downloadAlpaca={downloadAlpaca}
          />
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
