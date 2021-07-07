import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`
  }
  try {
    const {
      data: { confirmed, deaths, lastUpdate, recovered },
    } = await axios.get(changeableUrl);
    return { confirmed, deaths, lastUpdate, recovered };
    // console.log(response)
  } catch (error) {
    console.log(error)
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    // console.log(data[37].confirmed.total)
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
    // console.log(modifiedData)
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
};


export const fetchCountry = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`)
    return countries.map((country) => country.name)
    // console.log(data)

  }
  catch (error) {
    console.log(error)

  }
}