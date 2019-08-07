import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

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
const StatusSection = ({ state, name }) => {
  const classes = useStyles()
  return (
    <Container maxWidth='false' className={classes.container}>
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

const mapStateToProps = state => {
  return {
    state: state.roomInfo.state,
    name: state.roomInfo.name
  }
}

StatusSection.propTypes = {
  state: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(StatusSection)
