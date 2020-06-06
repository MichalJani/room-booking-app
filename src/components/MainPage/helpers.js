import { roomStates } from '../../utils/consts'

export const resolveClasses = (roomState, classes) => {
  console.log(`State = ${roomState},`)
  if (roomState === roomStates.OCCUPIED) {
    return `${classes.mainPageContainer} ${classes.roomOccupied}`
  }
  return `${classes.mainPageContainer} ${classes.roomFree}`
}
