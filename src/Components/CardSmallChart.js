import React from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);
const CardSmallChart = () => {
  let coin;
  let bcolor;
  let color;
  const { id } = useParams();
  const crypto = useSelector((state) => state.cryptos);
  crypto.forEach((element) => {
    if (element.uuid === id) {
      coin = element;
    }
  });
  if (coin.change > 0) {
    bcolor = 'rgba(10, 219, 33,0.8)';
    color = 'rgba(3, 169, 21 ,0.2)';
  } else {
    bcolor = 'rgba(232, 9, 36,0.8)';
    color = 'rgba(205, 2, 26 ,0.2)';
  }
  const coinPrice = [];
  for (let i = 0; i < coin.sparkline?.length; i += 1) {
    coinPrice.push(i);
  }
  const data = {
    labels: coinPrice,
    datasets: [
      {
        label: false,
        data: coin.sparkline,
        backgroundColor: color,
        borderColor: bcolor,

        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        fill: true,
      },
    ],
  };

  const options = {
    scaleShowLabels: false,
    maintainAspectRatio: true,
    responsive: false,

    legend: {
      display: '',
    },
    tooltip: {
      enabled: false,
    },
    scales: {
      x: {
        stacked: true,
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 4,
          display: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 4,
          display: false,
        },
      },
    },
  };
  return (
    <>
      <div className="row-12 justify-content-center align-items-center">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default CardSmallChart;
