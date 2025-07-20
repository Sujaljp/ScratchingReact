import React from "react";
import UserContext from "../../utils/UserContext";
// import ChildClass from "./ClassBasedComponents/ChildClass";

//Some notes from me
//React was build with the class based components and was like this for a long time
//Now class based components are just used in legacy code


//Rendering flow of the class
//As soon as the compiler sees a class based component
//a. constructor is called to instantiate the component
//b. render function is called to display jsx
//c. then componentDidMount is called

//we extend UserClass to React.Component to convert it into a class based component
class UserClass extends React.Component {

 
  //2.For recieving the props we use constructor 
  //we receive the props in the constructor
  constructor(props){
    //we have to pass the props to the super() as it assigns to the this.props in the parent constructor of React.Component class
    super(props)
    
    //3. earlier there were no hooks there was a state variable to store the state
    //it is a big object which will hold all the state variables
    this.state = {
        count : 0,  
        count2: 6 
    }
    console.log("Class is being instantiated")
  }

  //our older way of making api calls (useEffects older version)
  async componentDidMount(){
    //If there is a child component in the jsx
    //first the child component methods will be called 
    //then this parent componentDidMount
    
    console.log("Component did mount")
    const data = await fetch("https://api.github.com/users/sujaljp")
    const json = await data.json();
    // console.log(json)
    this.setState({
      userInfo: json
    })

    this.timer = setInterval(()=>{
      console.log("Interval set for 1 sec")
    },1000)
  }


  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate called")

    //old way of doing updates
    if(this.state.count != prevState.count){
      //then do something
    }

  }


  //try going to other link to trigger this
  componentWillUnmount(){
    console.log("componentWillUnmount was called")
    clearInterval(this.timer)
  }


  //1. Here the render method returns the jsx
  render() {

    console.log("Rendering the UI") 
    
    const {name, job} = this.props
    const {count, count2} = this.state
    // try this cool thing below : debugger
    // debugger
    const github_username = this.state.userInfo?.name
    
    return (
      <div className="user-class">
        <hr />
        <h2>Naam: {this.props.name}</h2>
        <h2>Kaam: {this.props.job}</h2>
        <h2>Github name: {github_username}</h2>
        <h2>Logged in User:  
          <UserContext.Consumer>
            {(data)=> data.loggedInUser}
          </UserContext.Consumer>
        </h2>
        <hr />
        <h3>Count: {count}</h3>
        <button onClick={()=>{
            //4. Never update state variables directly
            // this.state.count = this.state.count+1
            // react gives us a setState method for that
            this.setState({
                count: this.state.count+1,
                //note react does not touch the values of other state variables if they are not 
                //mentioned here for eg count2 value persists 
            })
        }}>Click</button>
      </div>
    );
  }
}

export default UserClass;


