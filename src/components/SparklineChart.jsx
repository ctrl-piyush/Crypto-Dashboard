import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, PointElement, LinearScale);

function SparklineChart({ sparkline }) {
  const data = {
    labels: sparkline.map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: '7-Day Price',
        data: sparkline,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.4)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return <Line data={data} options={{ responsive: true }} />;
}

export default SparklineChart;