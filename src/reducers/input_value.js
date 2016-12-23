import { INCREASE_BY, DECREASE_BY ,SET_VALUE } from '../../src/actions/types'

export default (state=0, action) => {
  switch (action.type) {
    case SET_VALUE:
      return action.payload
    case INCREASE_BY:
      return 0
    case DECREASE_BY:
      return 0
    default:
      return state
  }
}
