import ControlButton from "./ControlButton";

export default function StyleMenu({ activeSubMenu, onClick }) {
  return (
    <div className="styling">
      <h3>STYLE</h3>
      <div className="items">
        {activeSubMenu.items.map((data) => (
          <ControlButton
            key={data.id}
            data={data}
            onClick={() => onClick(data)}
          />
        ))}
      </div>
    </div>
  );
}
