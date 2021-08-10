export default function OtherControls({ randomizeAlpaca, downloadAlpaca }) {
  return (
    <div className="other__controls">
      <button onClick={randomizeAlpaca}>Random</button>
      <button onClick={downloadAlpaca}>Download</button>
    </div>
  );
}
