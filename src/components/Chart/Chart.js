import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoints }) {
  let maxValue = -1;
  for (let i = 0; i < 11; i++) {
    let firstValue = dataPoints[i].value;
    let secondValue = dataPoints[i + 1].value;
    if (firstValue > secondValue) {
      if (firstValue > maxValue) {
        maxValue = firstValue;
      }
    } else {
      if (secondValue > maxValue) {
        maxValue = secondValue;
      }
    }
  }

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
