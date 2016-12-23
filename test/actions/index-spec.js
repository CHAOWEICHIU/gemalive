import { expect } from 'chai'
import * as actions from '../../src/actions'
import {
  INCREASE_BY,
  DECREASE_BY,
  SET_VALUE
 } from '../../src/actions/types'

describe('action creators', ()=>{

  it('increaseBy()', ()=>{
    let output = {
      type: INCREASE_BY,
      payload: 5
    }
    expect(
      actions.increaseBy(5)
    ).to.eql(output)
  })

  it('decreaseBy()', ()=>{
    let output = {
      type: DECREASE_BY,
      payload: 3
    }
    expect(
      actions.decreaseBy(3)
    ).to.eql(output)
  })

  it('setValue()', ()=>{
    let output = {
      type: SET_VALUE,
      payload: 3
    }
    expect(
      actions.setValue(3)
    ).to.eql(output)
  })

})
