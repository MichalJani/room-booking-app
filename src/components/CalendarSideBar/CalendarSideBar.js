import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import CalendarCard from '../CalendarCard/CalendarCard'

const useStyles = makeStyles({
  list: {
    maxWidth: 400
  }
})

export const CalendarSideBar = ({ drawerOpen, onClick, events }) => {
  const classes = useStyles()

  const sideList = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={() => onClick(drawerOpen)}
      onKeyDown={() => onClick(drawerOpen)}
    >
      {events.map(event => (
        <CalendarCard {...event} />
      ))}
    </div>
  )

  return (
    <div>
      <Button onClick={() => onClick(drawerOpen)} data-test='CalSideBarButton'>
        Open Calendar
      </Button>
      <SwipeableDrawer
        anchor='right'
        open={drawerOpen}
        onClose={() => onClick(drawerOpen)}
        onOpen={() => onClick(drawerOpen)}
      >
        {sideList(events)}
      </SwipeableDrawer>
    </div>
  )
}

CalendarSideBar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      etag: PropTypes.string.isRequired,
      start: PropTypes.shape({
        dateTime: PropTypes.string,
        timeZone: PropTypes.string
      }).isRequired
    })
  ),
  drawerOpen: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
