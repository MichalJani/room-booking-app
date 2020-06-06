import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { CalendarCard } from '../CalendarCard'

const useStyles = makeStyles({
  list: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 600,
    backgroundColor: 'skyblue',
    minHeight: '100%',
    margin: '20px'
  },
  swippableDrawer: {
    minWidth: '400px'
  }
})

export const CalendarSideBar = ({ drawerOpen, onClick, events }) => {
  const classes = useStyles()
  const { isDrawerOpen } = drawerOpen
  const sideList = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={() => onClick(isDrawerOpen)}
      onKeyDown={() => onClick(isDrawerOpen)}
    >
      {events.map(event => (
        <CalendarCard key={event.id} {...event} />
      ))}
    </div>
  )

  return (
    <div>
      <Button onClick={() => onClick(isDrawerOpen)}>
        Open Calendar
      </Button>
      <SwipeableDrawer
        className={classes.swippableDrawer}
        anchor='right'
        open={isDrawerOpen}
        onClose={() => onClick(isDrawerOpen)}
        onOpen={() => onClick(isDrawerOpen)}
      >
        {sideList(events)}
      </SwipeableDrawer>
    </div>
  )
}

CalendarSideBar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      location: PropTypes.string,
      id: PropTypes.string,
      etag: PropTypes.string,
      start: PropTypes.shape({
        dateTime: PropTypes.string,
        timeZone: PropTypes.string
      })
    })
  ),
  drawerOpen: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}
