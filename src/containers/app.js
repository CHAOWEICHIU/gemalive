import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseBy , decreaseBy, setValue, setCounterToZero } from '../actions'
import Display from '../components/display'
import Counters from '../components/counters'

class App extends Component {
  onInputChange(e){
    if(e.target.value){
      this.props.setValue(e.target.value)
    } else {
      this.props.setValue(0)
    }
  }
  render(){
    const { counter, increaseBy, decreaseBy, inputValue, setCounterToZero } = this.props
    return (
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={this.onInputChange.bind(this)} />

        <Display counter={counter} />

        <Counters
          num={inputValue}
          increaseBy={increaseBy}
          decreaseBy={decreaseBy}/>

        <button onClick={()=>setCounterToZero()}>Set To 0</button>
      </div>
    )
  }
}

const mapStateToProps = ({counter, inputValue}) => ({counter, inputValue})

export default connect(mapStateToProps, {increaseBy, decreaseBy, setValue, setCounterToZero})(App)
