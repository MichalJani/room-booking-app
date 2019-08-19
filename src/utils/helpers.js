import { addMinutes, format } from 'date-fns'
import { gapi } from '../gapi'

export const quickBook = (numOfMinutes, roomName) => {
  const startDate = new Date(Date.now())
  const endDate = addMinutes(startDate, numOfMinutes)
  const parameters = {
    summary: 'Room Reservation',
    location: roomName,
    description: 'Conference Room booking',
    start: {
      dateTime: formatDateToGoogleFormat(startDate)
    },
    end: {
      dateTime: formatDateToGoogleFormat(endDate)
    },
    reminders: {
      useDefault: true
    }
  }

  return parameters
}

export const formatDateToGoogleFormat = date => {
  return `${formatDatePart(date)}T${formatTimePart(date)}:00+02:00`
}

export const formatDatePart = date => format(date, 'YYYY-MM-DD')
export const formatTimePart = date => format(date, 'HH:mm')

export const callApi = (command, body = {}) =>
  gapi.client.calendar.events[command]({
    calendarId: 'primary',
    ...body
  })
    .then(res => {
      console.log(`callApi response: ${res.json()}`)
      return res
    })
    .catch(error => {
      throw error
    })

export const unpackCalendarApiResponse = response => {
  response.body.json()
}
