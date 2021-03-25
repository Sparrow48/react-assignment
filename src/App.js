import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    useroutput: [
      { username: "Abu Nasib" },
      { username: "Roni" },
      { username: "Hasan" },
    ],
  };
  switchNameHandler = newName => {
    this.setState({
      useroutput: [
        { username: newName },
        { username: "Roni" },
        { username: "Hasan" },
      ],
    });
  };

  ChangeNameHandler = event => {
    this.setState({
      useroutput: [
        { username: "Abu Nasib" },
        { username: "Roni" },
        { username: event.target.value },
      ],
    });
  };
  render() {
    return (
      <div className='App'>
        <UserOutput
          username={this.state.useroutput[0].username}
          clicked={() => this.switchNameHandler("Nasib Sarkar")}
        />
        <UserOutput username={this.state.useroutput[1].username} />
        <UserOutput username={this.state.useroutput[2].username} />
        <UserInput
          changed={this.ChangeNameHandler}
          name={this.state.useroutput[2].username}
        />
      </div>
    );
  }
}

export default App;
