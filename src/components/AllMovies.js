import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core/'
import InfoIcon from '@material-ui/icons/Info'
import { movieSelected } from '../actions'

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
    height: window.innerHeight / 100 * 70,
  },
  gridListTitleBar: {
    width: 130,
    marginLeft: 54,
    opacity: 0,
    '&:hover': {
      opacity: 1
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    width: 120,
  },
}))

function AllMovies({ movies, actors, movieSelected }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Bond Movies</ListSubheader>
        </GridListTile>
        {movies.map((movie) => (
          <GridListTile key={movie.img}>
            <img onClick={()=> movieSelected(movie)} className={classes.img} src={movie.img} alt={movie.title} />
            <GridListTileBar
              className={classes.gridListTitleBar}
              title={movie.title}
              subtitle={<span>{actors[movie.bond].name}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
    actors: state.actors,
  }
}
export default connect(mapStateToProps, { movieSelected })(AllMovies)
