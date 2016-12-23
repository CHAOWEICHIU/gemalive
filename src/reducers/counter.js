import { INCREASE_BY, DECREASE_BY } from '../../src/actions/types'

export default (state=0, action) => {
  switch (action.type) {
    case INCREASE_BY:
      return state + action.payload
    case DECREASE_BY:
      return state - action.payload
    default:
      return state
  }
}
