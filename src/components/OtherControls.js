export default function OtherControls({ randomAlpaca, downloadAlpaca }) {
  return (
    <div className="other__controls">
      <button onClick={downloadAlpaca}>Random</button>
      <button onClick={downloadAlpaca}>Download</button>
    </div>
  );
}
