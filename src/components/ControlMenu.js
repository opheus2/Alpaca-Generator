import AccessorizeMenu from "./AccessorizeMenu";
import StyleMenu from "./StyleMenu";

export default function ControlMenu({
  config,
  activeSubMenu,
  selectStyle,
  selectMenu,
}) {
  return (
    <div className="controls">
      <AccessorizeMenu config={config} onClick={selectMenu} />
      <StyleMenu activeSubMenu={activeSubMenu} onClick={selectStyle} />
    </div>
  );
}
