import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    margin: 0
  },
  bold: {
    fontWeight: 700
  },
  marginTop: {
    marginTop: '20px'
  }
}))

export const StatusSection = ({ state, name }) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant='h3' component='h3'>
        {state}
      </Typography>
      <Typography
        variant='h2'
        component='h2'
        className={`${classes.bold} ${classes.marginTop}`}
      >
        {name}
      </Typography>
    </Container>
  )
}

StatusSection.propTypes = {
  state: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
