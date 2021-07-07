import './App.styles.css';
import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components';
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState({});
  const [changeCountry, setChangeCountry] = useState({});
  useEffect(() => {
    const APIdata = async () => {
      const data = await fetchData();
      setResult(data);
    };
    APIdata();
  }, []);

  const handleCountryChange = async (country) => {
    setChangeCountry(await fetchData(country));
  };


  const data = Object.keys(changeCountry).length ? changeCountry : result;

  return (
    <div className="container">
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={result} country={changeCountry} />
    </div>

  );
}

export default App;
