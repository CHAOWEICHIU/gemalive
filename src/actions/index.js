import { INCREASE_BY, DECREASE_BY } from './types'

export const increaseBy = num => ({
  type: INCREASE_BY,
  payload: parseInt(num)
})

export const decreaseBy = num => ({
  type: DECREASE_BY,
  payload: parseInt(num)
})
