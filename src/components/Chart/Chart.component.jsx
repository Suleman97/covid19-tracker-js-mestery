import { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.styles.css';

export const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  // console.log(dailyData[2]);
  // const LineChart = <Line data={{
  //   labels: dailyData.map(({ date }) => date),
  //   datasets: [
  //     {
  //       label: 'Infected',
  //       data: dailyData.map(({ confirmed }) => confirmed),
  //       fill: false,
  //       backgroundColor: 'rgb(255, 99, 132)',
  //       borderColor: 'rgba(255, 99, 132, 0.2)',
  //     },
  //     {
  //       data: dailyData.map(({ deaths }) => deaths),
  //       label: 'deaths',
  //       borderColor: 'red',
  //       backgroundColor: 'rgba(255, 0, 0, 0.5',
  //       fill: false,
  //     }
  //   ],
  // }} />
  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#333fff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5',
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className="container">
      {/* <LineChart /> */}
      {LineChart}
    </div>
  );
};
