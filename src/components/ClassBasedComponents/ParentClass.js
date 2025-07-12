import React, { Component } from "react";
import ChildClass from "./ChildClass";

export class ParentClass extends Component {
  constructor(props) {
    super(props);

    console.log(`Parent constructor`);
  }

  componentDidMount() {
    console.log(`Parent did mount`);
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        ParentClass
        <ChildClass name="1" />
        <ChildClass name="2" />
      </div>
    );
  }
}

export default ParentClass;
