import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountry } from '../../api';
import './CountryPicker.styles.css';

export const CountryPicker = ({ handleCountryChange }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const APIfetch = async () => {
      setCountry(await fetchCountry());
    };
    APIfetch();
  }, [setCountry]);

  return (
    <FormControl className="formcontrol">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>

        {country.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
