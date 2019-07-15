import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
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
  gridListTitleBar: {
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

function AllMovies({ movies, actors }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Bond Movies</ListSubheader>
        </GridListTile>
        {movies.map(({ img, title, bond}) => (
          <GridListTile key={img}>
            <img className={classes.img} src={img} alt={title} />
            <GridListTileBar
              className={classes.gridListTitleBar}
              title={title}
              subtitle={<span>{actors[bond].name}</span>}
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
export default connect(mapStateToProps)(AllMovies)
