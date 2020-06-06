import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'absolute',
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  button: {
    fontWeight: 'bold',
    color: 'white'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export const BottomAppBar = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar color='primary' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Button className={classes.button}>Find Free Space</Button>
          <Button className={classes.button}>Schedule</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
