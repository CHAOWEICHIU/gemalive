import { INCREASE_BY, DECREASE_BY, SET_VALUE, SET_TO_ZERO } from './types'

export const increaseBy = num => ({
  type: INCREASE_BY,
  payload: parseInt(num)
})

export const decreaseBy = num => ({
  type: DECREASE_BY,
  payload: parseInt(num)
})

export const setValue = num => ({
  type: SET_VALUE,
  payload: parseInt(num)
})

export const setCounterToZero = () => ({
  type: SET_TO_ZERO,
  payload: 0
})
