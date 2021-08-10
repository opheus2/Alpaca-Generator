import AccessorizeMenu from "./AccessorizeMenu";

export default function ControlMenu({
  config,
  activeSubMenu,
  selectStyle,
  selectMenu,
}) {
  return (
    <div className="controls">
      <AccessorizeMenu
        config={config}
        selectMenu={selectMenu}
        selectStyle={selectStyle}
      />
    </div>
  );
}
