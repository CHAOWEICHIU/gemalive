import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseBy , decreaseBy } from '../actions'
import Display from '../components/display'
import Counters from '../components/counters'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {value: 0}
  }
  render(){
    const { counter, increaseBy, decreaseBy } = this.props
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(e)=>this.setState({value:e.target.value})}/>

        <Display counter={counter} />

        <Counters
          num={this.state.value}
          increaseBy={increaseBy}
          decreaseBy={decreaseBy}/>
      </div>
    )
  }
}


const mapStateToProps = ({counter}) => ({counter})

export default connect(mapStateToProps, {increaseBy, decreaseBy})(App)
