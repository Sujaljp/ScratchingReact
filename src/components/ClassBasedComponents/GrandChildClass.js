import React, { Component } from 'react'

export class GrandChildClass extends Component {
     constructor(props){
        super(props)

        console.log(`Grand Child ${this.props.name} constructor`)
    }

    componentDidMount(){
        console.log(`Grand Child ${this.props.name} did mount`)
    }
  render() {
        console.log(`Grand Child ${this.props.name} render`)

    return (
      <div>GrandChildClass</div>
    )
  }
}

export default GrandChildClass