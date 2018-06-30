
import React, { Component } from "react";
import SayHello from "./components/SayHello";
import Border from "./components/Border";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Suwijak Lohanan",
      age: 21
    }
  }
  incrementAge(){
    this.setState({age: this.state.age + 1});
  }
  render() {
    return (
      <div className="App">
      <SayHello name={this.state.name} age={this.state.age}/>
        <p>Hello, {this.state.name}</p>
        <p>age, {this.state.age}</p>
        <Border>
        <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
        </Border>
      </div>
    );
  }
}



 

export default App;
