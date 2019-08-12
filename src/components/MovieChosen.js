import React from 'react'
import { makeStyles } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  imgLarge: {
    maxWidth: '100%',
    maxHeight: (window.innerHeight / 100) * 90,
  },
}))

const MovieChosen = ({ chosen }) => {
  const styles = useStyles()
  const { imgLarge, title } = chosen
  const maxH = (window.innerHeight / 100) * 90
  return (
    <div>
      {typeof chosen === 'string' ? (
        chosen
      ) : (
        <img className={styles.imgLarge} src={imgLarge} alt={title} />
      )}
    </div>
  )
}

export default MovieChosen
