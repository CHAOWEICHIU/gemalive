import { expect } from 'chai'
import reducer from '../../src/reducers/input_value'
import { INCREASE_BY, DECREASE_BY, SET_VALUE } from '../../src/actions/types'

describe('inputValue reducer', ()=>{
  let input, output
  beforeEach(()=>{
    input = ''
    output = ''
  })

  it('init state', ()=>{
    input = reducer(undefined, {})
    output = 0
    expect(input).to.eql(output)
  })

  it('handle INCREASE_BY', ()=>{
    input = reducer(4, {type:INCREASE_BY, payload:5})
    output = 0
    expect(input).to.equal(output)
  })

  it('handle DECREASE_BY', ()=>{
    input = reducer(4, {type:DECREASE_BY, payload:5})
    output = 0
    expect(input).to.equal(output)
  })

  it('handle SET_VALUE', ()=>{
    input = reducer(4, {type:SET_VALUE, payload:5})
    output = 5
    expect(input).to.equal(output)
  })

})
