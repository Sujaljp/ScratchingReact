import React, { Component } from 'react'
import GrandChildClass from './GrandChildClass'

export class ChildClass extends Component {

    constructor(props){
        super(props)

        console.log(`Child ${this.props.name} constructor`)
    }

    componentDidMount(){
        console.log(`Child ${this.props.name} did mount`)
    }
  render() {
    console.log(`Child ${this.props.name} render`)
    return (
      <div>ChildClass
      <GrandChildClass name={`${this.props.name}.1`}/>
      <GrandChildClass name={`${this.props.name}.2`}/>
      </div>
    )
  }
}

export default ChildClass