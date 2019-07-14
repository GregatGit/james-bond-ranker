import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 850,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    height: 120,
    width: 80,
  }
}))

function AllMovies({movies}) {
  const classes = useStyles()
  const movieList = _.keys(movies) // arr of all movies ids
  console.log('movieList: ', movieList)
  return (
  <div className={classes.root}>
  <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {movieList.map(movie => (
          <GridListTile key={movies[movie].img}>
            <img className={classes.img} src={movies[movie].img} alt={movies[movie].title} />
            <GridListTileBar
              title={movies[movie].title}
              subtitle={<span></span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
  
  </div>)
}
const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
    actors: state.actors
  }
}
export default connect(mapStateToProps)(AllMovies)
