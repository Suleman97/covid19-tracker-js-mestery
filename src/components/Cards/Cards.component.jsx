import { Card, Grid, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';

import './Cards.styles.css';

export const Cards = ({
  data: { confirmed, lastUpdate, deaths, recovered },
}) => {
  let date;
  if (lastUpdate) {
    date = new Date(lastUpdate).toDateString()
  }

  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className="card card_infected"
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed?.value ?? 0}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {date ?? 0}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className="card card_recovered"
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered?.value ?? 0}
                duration={2.5}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary">
              {date ?? 0}
            </Typography>
            <Typography variant="body2">
              Number of Recovered cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className="card card_deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths?.value ?? 0}
                duration={2.5}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary">
              {date ?? 0}
            </Typography>
            <Typography variant="body2">
              Number of Death cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
