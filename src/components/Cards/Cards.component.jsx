import { Card, Grid, Typography, CardContent } from '@material-ui/core'
import './Cards.styles.css'

export const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  if (!confirmed) {
    return <h1>Loading....</h1>
  }
  // console.log(data)
  return (
    <div className="container">
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant='h5'>{confirmed.value}</Typography>
            <Typography color="textSecondary" >REAL DATE</Typography>
            <Typography variant='body2'>Number of active cases of Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant='h5'>REAL DATA</Typography>
            <Typography color="textSecondary" >REAL DATE</Typography>
            <Typography variant='body2'>Number of Recovered cases of Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant='h5'>REAL DATA</Typography>
            <Typography color="textSecondary" >REAL DATE</Typography>
            <Typography variant='body2'>Number of Death cases of Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

    </div>
  )
}