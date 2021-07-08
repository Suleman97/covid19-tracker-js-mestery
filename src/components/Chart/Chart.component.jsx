import { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.styles.css';

export const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  // console.log(country)
  // console.log(confirmed, recovered, deaths)
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);
  // console.log(dailyData)

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

  // console.log(confirmed, recovered, deaths)

  console.log(country)
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          },
        ],
      }}
      options={{
        legend: { dispaly: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className="container">
      {/* {LineChart} */}
      {Object.keys(country).length ? barChart : LineChart}
    </div>
  );
};
