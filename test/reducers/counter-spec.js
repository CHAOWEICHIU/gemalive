import { expect } from 'chai'
import reducer from '../../src/reducers/counter'
import { INCREASE_BY, DECREASE_BY } from '../../src/actions/types'

describe('counter reducer', ()=>{
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
    output = 9
    expect(input).to.equal(output)
  })

  it('handle DECREASE_BY', ()=>{
    input = reducer(4, {type:DECREASE_BY, payload:5})
    output = -1
    expect(input).to.equal(output)
  })
  
})
