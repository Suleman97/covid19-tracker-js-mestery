import axios from "axios";

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const { data: { confirmed, deaths, lastUpdate, recovered } } = await axios.get(url)
    return { confirmed, deaths, lastUpdate, recovered }
    // console.log(response)
  }
  catch (error) {

  }

}