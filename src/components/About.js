import React from 'react'
import User from './User'
import UserClass from './ClassBasedComponents/UserClass'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <h2>This me creating a about page by following Namaste react</h2>
        <User name="Sujal" job="Software Engineer"/>
        {/* <UserClass name="Sujal class" job="Software Engineer class"/> */}
        {/* Looking for parent and child relation : ParentClass component */}
    </div>
  )
}

export default About