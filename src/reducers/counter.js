import { INCREASE_BY, DECREASE_BY, SET_TO_ZERO } from '../../src/actions/types'

export default (state=0, action) => {
  switch (action.type) {
    case SET_TO_ZERO:
      return 0
    case INCREASE_BY:
      return state + action.payload
    case DECREASE_BY:
      return state - action.payload
    default:
      return state
  }
}
