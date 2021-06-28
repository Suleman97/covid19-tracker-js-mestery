import './App.styles.css'
import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components'
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    async function db() {
      const data = await fetchData()
      setResult(data)
      // console.log(data)

    }
    db();
  }, [])
  // console.log(result)
  return (
    <div className="container">
      <Cards data={result} />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;

