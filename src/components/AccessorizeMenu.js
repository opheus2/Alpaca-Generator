import ControlButton from "./ControlButton";

export default function AccessorizeMenu({ config, selectMenu, selectStyle }) {
  return (
    <>
      <div className="accessories">
        <h3>ACCESSORIZE THE ALPACA'S</h3>
        <div className="items">
          {config.map((data) => (
            <ControlButton
              key={data.label.toLowerCase()}
              data={data}
              onClick={selectMenu}
            />
          ))}
        </div>
      </div>
      {config.map((style) =>
        style.selected ? (
          <div className="styling" key={style.id}>
            <h3>STYLE</h3>
            <div className="items">
              {style.items.map((data) => (
                <ControlButton
                  key={data.id}
                  data={data}
                  onClick={selectStyle}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}
