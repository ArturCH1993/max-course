import './ChartBar.css';

function ChartBar({ value, maxValue, label }) {
  let fillValue = '0%';

  if (maxValue > 0) {
    fillValue = `${Math.round((value * 100) / maxValue)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillValue }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
