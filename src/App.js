import React from 'react'
import { Paper, makeStyles, Grid } from '@material-ui/core/'
import { connect } from 'react-redux'

import AllMovies from './components/AllMovies'
import MovieChosen from './components/MovieChosen'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function App({ movie }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm>
          <MovieChosen chosen={movie}/>
        </Grid>
        <Grid item sm>
          <Paper className={classes.paper}>
            <AllMovies />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movie
  }
}
export default connect(mapStateToProps)(App)
