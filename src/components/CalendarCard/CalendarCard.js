import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    padding: '5px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20px'
  },
  title: {
    color: 'black'
  },
  status: {
    color: 'black'
  }
}))

export const CalendarCard = props => {
  const {
    description,
    location,
    id,
    start,
    end
  } = props
  const classes = useStyles()

  return (
    <Card className={classes.card} id={id}>
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
        >
          {`${start && start.dateTime} - ${end && end.dateTime} `}
        </Typography>
        <Typography variant='h5' component='h5' className={classes.title}>
          {description}
        </Typography>
        <Typography variant='h6' component='h6' cclassName={classes.title}>
          {location}
        </Typography>
      </CardContent>
    </Card>
  )
}

CalendarCard.propTypes = {
  description: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
  etag: PropTypes.string,
  start: PropTypes.shape({
    dateTime: PropTypes.string,
    timeZone: PropTypes.string
  })
}
