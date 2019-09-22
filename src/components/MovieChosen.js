import React, { useState, useEffect } from 'react'
import { makeStyles, Zoom } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  imgLarge: {
    maxWidth: '100%',
    maxHeight: (window.innerHeight / 100) * 90,
  },
}))

const MovieChosen = ({ chosen }) => {
  const styles = useStyles()
  const [display, setDisplay] = useState('...loading')
  const { imgLarge, title } = chosen
  
  useEffect(() => {
    setDisplay('...loading')
    setTimeout(() => {
      setDisplay(displayMovie(imgLarge, title))
    }, 1);
  }, [chosen])
  
  function displayMovie(img, title) {
    return (
      <Zoom in timeout={{ enter: 1500, exit: 1000 }}>
        <img className={styles.imgLarge} src={img} alt={title} />
      </Zoom>
    )
  }
  return (
    <div>
      {typeof chosen === 'string' ? chosen : display}
    </div>
  )
}

export default MovieChosen
